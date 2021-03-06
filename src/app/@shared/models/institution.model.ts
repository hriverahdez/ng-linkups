import { Subnet } from "./subnet.model";
import { Category } from "./category.model";
import { User } from "./user.model";

export interface Institution {
  _id?: string;
  name?: string;
  type?: string;
  line_number?: string;
  location?: string;
  wan?: Subnet;
  bandwidth?: string;
  state?: string;
  last_report?: string;
  lan?: Subnet;
  final_destination?: string;
  gate_type?: string;
  notes?: string;
  phone_number?: string;
  has_internet?: boolean;
  category?: Category;
  user: User;
  createdAt: string;
  updatedAt: string;
}
