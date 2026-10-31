export interface IContact {
  id: number;
  title: string;
  titleKz: string | null;
  emails: string[];
  phones: string[];
}