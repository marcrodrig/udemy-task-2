# Coding Exercise - Student Grade Management

<h1>Create an App that will manage students and their grades</h1>
<ol>
    <li>Create <strong>Button Component</strong> that will have props of type <strong>(primary or default).</strong></li>
    <li>Create <strong>Input Component</strong> that will have props of <strong>label, onChange, value, error</strong>.</li>
    <li>
        Create <strong>StudentGrade</strong> component that will be the main component of the project.
        This will contain All the things that you can see in the UI but <strong>Students with 90% and Above </strong>
        and <strong>Students With 70% and Below</strong> are separate component.
    </li>
    <li>Use the Button and Input Components that you have created in <strong>StudentGrade</strong> component.</li>
    <li>
        In Student Grade these are the functionalities needed:
        <ul>
            <li>Show all the students and their grades in a list.</li>
            <li>You can add a student and grade by writing in the input elements and click Add Button.</li>
            <li>If Add Button is clicked and one of the input is empty, it should focus on it, turn it to red and show error message.</li>
            <li>When the input state is error and the user types a value, the error state will be removed.</li>
            <li>If Add Button is successful, empty the inputs again.</li>
        </ul>
    </li>
    <li>Create <strong>Context</strong> to share Students Name and Grade to other components.</li>
    <li>Create Component for <strong>Students With 90% and Above</strong>. Show students with 90% and above grade.</li>
    <li>Create Component for <strong>Students With 70% and Below</strong>. Show students with 70% and below grade.</li>
    <li>
        Create interfaces and types as much as you can. If you can create interfaces/types for all, then <strong>YOU ARE ON ANOTHER LEVEL! </strong>
        <br/>
        <br/>
        <strong><i>If you can create specific types for all, YOU ARE A BEAST!</i></strong>
    </li>
</ol>
<h2>Tips (Optional as you can do it on your own way)</h2>
<ul>
    <li>
        State contains the following:
        <ul>
            <li><strong>inputGrade</strong> - contains the value you input for the grade</li>
            <li><strong>inputStudentName</strong> - contains the value you input for the name</li>
            <li><strong>fieldWithError</strong> - which field with error</li>
            <li><strong>studentsGrade</strong> - an array of object that contains <strong>name and grade</strong></li>
        </ul>
    </li>
    <li>
        <strong>Context</strong> is created in StudentGrade component because the other components are inside it.
        Definitely you can create a separate context component, whatever you prefer. Refactoring of
        codes are also part of coding in React to make the codebase clean.
    </li>
    <li><strong>ForwardRef </strong> is use in the reusable Input Component.</li>
</ul>

## Available Scripts

In the project directory, you can run:
```bash
## Installing all dependencies
npm install
```
```bash
## Runs the app in the development mode.
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.