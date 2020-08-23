import { GetStaticProps } from 'next';
import { Employee, massageEmployee } from 'src/employees';
import { handleImages } from 'src/utils/imageHandler';
import { EmployeeJSON } from 'src/utils/typings/Employee';

export { default } from 'src/employees';

export const getStaticProps: GetStaticProps<{
  employeeList: Employee[];
}> = async () => {
  // Set so we can run local as fallback.
  const baseUrl = process.env.AZURE_PROXY_URL || 'http://localhost:7071/api';
  const authKey = process.env.AZURE_PROXY_KEY
    ? `?code=${process.env.AZURE_PROXY_KEY}`
    : '';
  const request = await fetch(`${baseUrl}/getEmployees${authKey}`);
  if (request.ok) {
    const employeesJSON = await request.json();
    // Make images
    const employeeList = await Promise.all<Employee>(
      employeesJSON.map(async (employee: EmployeeJSON) => {
        const imageSlug = await handleImages(employee);
        return { ...massageEmployee(employee), imageSlug };
      }),
    );
    return { props: { employeeList }, revalidate: 24 * 60 * 60 };
  }
  // Trigger fallback on previous version
  throw new Error();
};
