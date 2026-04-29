'use strict';

const listElements = document.querySelector('ul');

function sortList(list) {
  const sortedList = Array.from(list.querySelectorAll('li')).sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace('$', '').replace(',', ''));
    const salaryB = Number(b.dataset.salary.replace('$', '').replace(',', ''));

    return salaryB - salaryA;
  });

  sortedList.forEach((item) => list.append(item));
}

function getEmployees(list) {
  const items = list.querySelectorAll('li');

  return Array.from(items).map((item) => ({
    name: item.dataset.name,
    position: item.dataset.position,
    salary: Number(item.dataset.salary.replace('$', '').replace(',', '')),
    age: Number(item.dataset.age),
  }));
}

sortList(listElements);

getEmployees(listElements);
