import { Injectable } from "@angular/core";

@Injectable()
export class IpHelperService {
  constructor() {}

  /**
   * Get amount of octects in address that identify subnets. 
     Example: A /29 subnet mask is 255.255.255.248 and the method's result is 3
   * @param CIDR 
   */
  getNetworkOctets(CIDR: number) {
    return Math.floor(CIDR / 8);
  }

  /**
   * Get amount of bits that were borrowed from subnet's last octect. 			
    Example: A /29 subnet mask is 255.255.255.248 and the method result is 5,
    because 248 means that 5 bits were borrowed (in binary -> 11111000 = 248)
   * @param CIDR 
   */
  getBorrowedBits(CIDR: number) {
    return CIDR % 8;
  }

  /**
   * Get amount of hosts in subnet
   * @param CIDR
   */
  getAmountOfHosts(CIDR: number) {
    return Math.pow(2, 32 - CIDR);
  }

  /**
   * Get amount of usable hosts in subnet, removing subnet identifier and broadcast
   * @param CIDR
   */
  getUsableHosts(CIDR) {
    return this.getAmountOfHosts(CIDR) - 2;
  }

  getBroadcast(ipAddress: string, CIDR: number) {
    const networkBits = this.getNetworkOctets(CIDR);
    let variableOctetLastHost =
      255 ^ this.getHostsOctet(this.getBorrowedBits(CIDR));
    const splitIP = ipAddress.split(".").map(o => parseInt(o, 10));
    let broadcast;

    switch (networkBits) {
      case 1: {
        let variableOctet =
          variableOctetLastHost + splitIP[1] > 255
            ? 255
            : variableOctetLastHost + splitIP[1];
        return `${splitIP[0]}.${variableOctet}.255.255`;
      }

      case 2: {
        let variableOctet =
          variableOctetLastHost + splitIP[2] > 255
            ? 255
            : variableOctetLastHost + splitIP[2];
        return `${splitIP[0]}.${splitIP[1]}.${variableOctet}.255`;
      }

      case 3: {
        let variableOctet =
          variableOctetLastHost + splitIP[3] > 255
            ? 255
            : variableOctetLastHost + splitIP[3];
        return `${splitIP[0]}.${splitIP[1]}.${splitIP[2]}.${variableOctet}`;
      }
    }
  }

  /**
   * Obtain the octect that identifies hosts
    Example: Example: A /29 subnet mask is 255.255.255.248 and the method's result is 248
    See above.
   * @param borrowedBits 
   */
  getHostsOctet(borrowedBits: number) {
    return ((1 << borrowedBits) - 1) << (8 - borrowedBits);
  }

  /**
   * Obtain netmask from a CIDR notation
    Example: For a /29 CIDR the result is 255.255.255.248  
   * @param CIDR 
   */
  obtainNetmask(CIDR: number) {
    const amountNetworkOctets = this.getNetworkOctets(CIDR);
    const borrowedBits = this.getBorrowedBits(CIDR);

    let netmask = "";
    for (let i = 0; i < amountNetworkOctets; i++) {
      netmask += "255.";
    }

    netmask += this.getHostsOctet(borrowedBits).toString();

    switch (amountNetworkOctets) {
      case 1:
        netmask += ".0.0";
        break;
      case 2:
        netmask += ".0";
        break;
      case 3:
        break;
    }
    return netmask;
  }

  /**
   * Get amount of subnets in a given subnet range
   * @param firstSubnet first subnet (e.g 192.168.1.0)
   * @param lastSubnet last subnet (e.g 192.168.1.128)
   * @param CIDR CIDR to be used as the size for all the subnets in the range (e.g 29)
   */
  getAmountOfSubnetsInRange(
    firstSubnet: string,
    lastSubnet: string,
    CIDR: number
  ) {
    const amountNetworkOctets = this.getNetworkOctets(CIDR);
    const firstSubnetOctets = firstSubnet.split(".");
    const lastSubnetOctets = lastSubnet.split(".");

    const borrowedBits = this.getBorrowedBits(CIDR);

    const blockSize = 256 - this.getHostsOctet(borrowedBits);
    let count = 0,
      current = 0;

    while (parseInt(lastSubnetOctets[amountNetworkOctets]) >= current) {
      current += blockSize;
      count++;
    }

    return count;
  }

  /**
   * Returns an array with subnets in the given range, taking into account the block size for the jumps
   * @param firstSubnet first subnet (e.g 192.168.1.0)
   * @param lastSubnet last subnet (e.g 192.168.1.128)
   * @param CIDR CIDR to be used as the size for all the subnets in the range (e.g 29)
   */
  getSubnetsInRange(firstSubnet: string, lastSubnet: string, CIDR: number) {
    const amountOfNetworkOctets = this.getNetworkOctets(CIDR);
    const borrowedBits = this.getBorrowedBits(CIDR);
    let firstSubnetOctets = firstSubnet.split(".");
    let lastSubnetOctets = lastSubnet.split(".");

    const blockSize = 256 - this.getHostsOctet(borrowedBits);
    let subnets = [];
    let current = firstSubnet;
    let amountOfSubnetsInRange = this.getAmountOfSubnetsInRange(
      firstSubnet,
      lastSubnet,
      CIDR
    );

    while (amountOfSubnetsInRange != 0) {
      subnets.push(current);
      firstSubnetOctets[amountOfNetworkOctets] = (
        parseInt(firstSubnetOctets[amountOfNetworkOctets]) + blockSize
      ).toString();
      current = firstSubnetOctets.join(".");
      amountOfSubnetsInRange--;
    }

    return subnets;
  }

  /**
   * Checks whether a given ip range is valid by comparing octets
   * @param firstSubnet first subnet (e.g 192.168.1.0)
   * @param lastSubnet last subnet (e.g 192.168.1.128)
   * @param CIDR CIDR to be used as the size for all the subnets in the range (e.g 29)
   */
  rangeIsValid(firstSubnet: string, lastSubnet: string, CIDR: number): boolean {
    const firstSubnetOctets = firstSubnet.split(".");
    const lastSubnetOctets = lastSubnet.split(".");
    const amountOfNetworkOctets = this.getNetworkOctets(CIDR);
    let valid = true;

    for (let i = 0; i < amountOfNetworkOctets; i++) {
      if (firstSubnetOctets[i] != lastSubnetOctets[i]) {
        valid = false;
        break;
      }
    }
    return valid;
  }
}
