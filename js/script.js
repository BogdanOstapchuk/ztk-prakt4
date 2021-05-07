let btn = document.querySelector('.btn');
let hTag = document.createElement('h3');
let result = document.querySelector('.result');
let pTag1 = document.createElement('p');
let pTag2 = document.createElement('p');
let pTag3 = document.createElement('p');
let pTag4 = document.createElement('p');

class Person {
	firstName;
	surname;
	dateOfBirth;
	constructor(firstName, surname, dateOfBirth) {
		this.firstName = firstName;
		this.surname = surname;
		this.dateOfBirth = dateOfBirth;
	}
	person() {
		pTag4.remove()
		hTag.textContent = 'Данные о человеке';
		result.appendChild(hTag);
		pTag1.textContent = `Имя:  ${this.firstName}`;
		pTag2.textContent = `Фамилия:  ${this.surname}`;
		pTag3.textContent = `Дата рождения:  ${this.dateOfBirth}`;
		result.appendChild(pTag1);
		result.appendChild(pTag2);
		result.appendChild(pTag3);
	}
}
class Applicant {
	numberOfPointsZNO;
	numberOfPointsForEducation;
	nameOfTheSecondarySchool;
	constructor(numberOfPointsZNO, numberOfPointsForEducation, nameOfTheSecondarySchool) {
		this.numberOfPointsZNO = numberOfPointsZNO;
		this.numberOfPointsForEducation = numberOfPointsForEducation;
		this.nameOfTheSecondarySchool = nameOfTheSecondarySchool;
	}
	applicant() {
		pTag4.remove()
		hTag.textContent = 'Данные о абитуриенте';
		result.appendChild(hTag);
		pTag1.textContent = `Количество баллов сертификатов ВНО:  ${this.numberOfPointsZNO}`;
		pTag2.textContent = `Количество баллов за документ об образовании:  ${this.numberOfPointsForEducation}`;
		pTag3.textContent = `Название общеобразовательного учебного заведения:  ${this.nameOfTheSecondarySchool}`;
		result.appendChild(pTag1);
		result.appendChild(pTag2);
		result.appendChild(pTag3);
	}
}
class Student {
	course;
	group;
	faculty;
	seniorMortgage;
	constructor(course, group, faculty, seniorMortgage) {
		this.course = course;
		this.group = group;
		this.faculty = faculty;
		this.seniorMortgage = seniorMortgage;
	}
	student() {
		hTag.textContent = 'Данные о студенте';
		result.appendChild(hTag);
		pTag1.textContent = `Курс:  ${this.course}`;
		pTag2.textContent = `Группа:  ${this.group}`;
		pTag3.textContent = `Факультет:  ${this.faculty}`;
		pTag4.textContent = `Вуз:  ${this.seniorMortgage}`;
		result.appendChild(pTag1);
		result.appendChild(pTag2);
		result.appendChild(pTag3);
		result.appendChild(pTag4);
	}
}
class Teacher {
	position;
	department;
	higherEducationInstitution;
	constructor(position, department, higherEducationInstitution) {
		this.position = position;
		this.department = department;
		this.higherEducationInstitution = higherEducationInstitution;
	}
	teacher() {
		pTag4.remove()
		hTag.textContent = 'Данные о учителе';
		result.appendChild(hTag);
		pTag1.textContent = `Должность:  ${this.position}`;
		pTag2.textContent = `Кафедра:  ${this.department}`;
		pTag3.textContent = `Вуз:  ${this.higherEducationInstitution}`;
		result.appendChild(pTag1);
		result.appendChild(pTag2);
		result.appendChild(pTag3);

	}
}
class LibraryUser {
	ticketNumber;
	dateOfIssue;
	monthlyAmountRreadersFee;
	constructor(ticketNumber, dateOfIssue, monthlyAmountRreadersFee) {
		this.ticketNumber = ticketNumber;
		this.dateOfIssue = dateOfIssue;
		this.monthlyAmountRreadersFee = monthlyAmountRreadersFee;
	}
	libraryUser() {
		pTag4.remove()
		hTag.textContent = 'Данные пользователе библиотеки';
		result.appendChild(hTag);
		pTag1.textContent = `Номер читательского билета:  ${this.ticketNumber}`;
		pTag2.textContent = `Дата выдачи:  ${this.dateOfIssue}`;
		pTag3.textContent = `Размер ежемесячного читательского взноса:  ${this.monthlyAmountRreadersFee}`;
		result.appendChild(pTag1);
		result.appendChild(pTag2);
		result.appendChild(pTag3);
	}
}
btn.addEventListener("click", (e) => {
	let login = document.querySelector('.input1').value;
	let password = document.querySelector('.input2').value;
	e.preventDefault()
	if (login == 'Person' && password == '111') {
		let person1 = new Person('Богдан', 'Остапчук', '20-07-2002')
		person1.person()
	} else if (login == 'Applicant' && password == '222') {
		let person2 = new Applicant('200', '199', 'ЖТК КНУБА')
		person2.applicant()
	} else if (login == 'Student' && password == '333') {
		let person3 = new Student('4', 'П-43', 'Экономический', 'КНУБА')
		person3.student()
	} else if (login == 'Teacher' && password == '444') {
		let person4 = new Teacher('Директор', '316', 'КНУБА')
		person4.teacher()
	} else if (login == 'LibraryUser' && password == '555') {
		let person5 = new LibraryUser('4343434', '21-05-2020', '35')
		person5.libraryUser()
	} else {
		alert('Неверно введены даные')
	}
})