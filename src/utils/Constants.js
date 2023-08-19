export const BASE_URL = "https://api.themoviedb.org/3";

export const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDEwYThkZGZmMTVmYTdkNDIxYmU0ZjBlMzFlNTRlNiIsInN1YiI6IjY0ZGM4MTdlYTNiNWU2MDEzOWZmZjZhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gjZ8AVgPq7zFvZ0Q6ZhzjYhssIPpg8AS5JVCSroQyg0";

export const toHoursAndMinutes = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
};
