export enum EnumEmploymentType {
    Full_Time = "Full Time",
    Part_Time = "Part Time",
    Freelance = "Freelance",
    Internship = "Internship"
}
export interface IJobItem {
    id: number,
    title: string,
    description: string,
    employment_type: EnumEmploymentType
}