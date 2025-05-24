/**
 * @jest-environment jsdom
 */
import { renderStudentsTable, studentsList } from '../js/main';

describe('renderStudentsTable', () => {
  let table: HTMLTableElement;

  beforeEach(() => {
    table = renderStudentsTable(studentsList);
    document.body.innerHTML = ''; // نضمن إن مفيش جدول قديم
    document.body.appendChild(table);
  });

  test('should render a table element', () => {
    expect(document.querySelector('table')).not.toBeNull();
  });

  test('should render table headers', () => {
    const headers = Array.from(document.querySelectorAll('th')).map(th => th.textContent);
    expect(headers).toEqual(["First Name", "Location", "Age", "Last Name"]);
  });

  test('should render correct number of student rows', () => {
    const rows = document.querySelectorAll('tbody tr');
    expect(rows.length).toBe(studentsList.length);
  });

  test('should render correct student data in each row', () => {
    const rows = document.querySelectorAll('tbody tr');

    rows.forEach((row, index) => {
      const cells = row.querySelectorAll('td');
      const student = studentsList[index];

      expect(cells[0].textContent).toBe(student.firstName);
      expect(cells[1].textContent).toBe(student.location);
      expect(cells[2].textContent).toBe(student.age.toString());
      expect(cells[3].textContent).toBe(student.lastName);
    });
  });
});
