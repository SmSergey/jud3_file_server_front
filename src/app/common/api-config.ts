export const URLS = {
  REBUILD_PROJECT_URL: (project: string, token: string) =>
    `http://192.168.49.2:32100/projects/${project}/build?token=${token}`,
  // REBUILD_PROJECT_URL: (project: string, token: string) =>
  //   `http://localhost:8080/projects/${project}/build?token=${token}`,

  GET_PROJECT_ENV_FILE: (project: string, fileName: string) =>
    `http://192.168.49.2:32100/?file=${fileName}&project=${project}`,
  // GET_PROJECT_ENV_FILE: (project: string, fileName: string) =>
  //   `http://localhost:8080/?project=${project}&file=${fileName}`,

  UPDATE_PROJECT_ENV_FILE: (project: string, fileName: string) =>
    `http://192.168.49.2:32100/?project=${project}&file=${fileName}`,
  // UPDATE_PROJECT_ENV_FILE: (project: string, fileName: string) =>
  //   `http://localhost:8080/?project=${project}&file=${fileName}`,
};
