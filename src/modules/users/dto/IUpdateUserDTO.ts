interface IUpdateUserDTO {
  id?: string;
  name?: string;
  email?: string;
  avatar?: string;
  type?: "user" | "admin" | "support";
  status?: "active" | "inactive";
  password?: string;
  gender?: "masculine" | "feminine" | "transgender" | "outher";
  phone?: string;
  cellPhone?: string;
  postalCode?: string;
  street?: string;
  number?: string;
  complement?: string;
  district?: string;
  city?: string;
  state?: string;
}

export { IUpdateUserDTO };
