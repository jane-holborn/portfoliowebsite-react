export const Copyright = () => {
  const currentYear: number = new Date().getFullYear();
  return <p>&copy; {currentYear} codebyjane. All rights reserved.</p>;
};
