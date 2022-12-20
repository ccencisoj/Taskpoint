export interface GetTasksDTO {
  skip?: number;
  limit?: number;
  searchValue?: string;
  owner: string;
}
