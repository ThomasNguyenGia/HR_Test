### Project Setup
1. Install the project:

*Run the following command to create the Next.js app:
### `npx create-next-app@latest hr_test`
*Install the required libraries:
### `npm install antd`
### `npm install react-icons`
### `npm install react-router-dom`

2. Create folder structure:
Create a folder named page where the project's components will be implemented.

### Running the Web Application
1. Build the project:

After cloning the project, run the following command to build the web application:
### `npm run build`
Once the build is successful, start the application with:
### `npm start`
2. Admin Login:
Use the following credentials to log in as an admin:
Username: `admin`
Password: `adminpassword`
3. Employee Management:
Once logged in, you'll be directed to the employee list page. Since the data is stored in localStorage, there won't be any existing data.

4. Adding Employees:
Enter the employee details and assign login credentials (username and password) for each employee.

5. Employee Login:
Restart the web application and log in using the newly created employee account to view employee information and request leave.

6. Leave Request:
Employees can submit a leave request. Once submitted, the admin will see the request on the admin's leave approval page.
7. Admin Leave Approval:
Admins can approve or reject leave requests. The status will be displayed on the employee's page after approval.

### Advantages
The web application has clear logic for managing employees. There is no self-registration for employees, as admin manually assigns accounts to each staff member.
### Limitations
Frontend and backend are not separated clearly.
Data is only stored on localStorage.
The user interface is still quite basic.
### Environment Details
Node.js version: v20.16.0
Feel free to copy and paste this into your README!