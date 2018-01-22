import { Category } from "../../categories/models/category.model";

export interface Institution {
  _id?: string;
  name?: string;
  type?: string;
  line_number?: string;
  location?: string;
  wan?: string;
  bandwidth?: string;
  state?: string;
  last_report?: string;
  lan?: string;
  final_destination?: string;
  gate_type?: string;
  notes?: string;
  phone_number?: string;
  has_internet?: boolean;
  category?: Category;
}
