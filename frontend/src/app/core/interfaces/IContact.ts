export interface IContact {
  id: number;
  title: string;
  emails: string[];
  phones: string[];
  forms: IForm[];
}

export interface IForm {
  title: string;
  fileName: string;
}