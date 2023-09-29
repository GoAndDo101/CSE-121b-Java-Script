//const numbers = ["one", "two", "three"]
//const stepsHtml = numbers.map(function (step){
//    return `<li>${step}</li>`;
//});
//document.getElementById("myList").innerHTML = stepsHtml.join();


const grades = ["A", "B", "C"];

const gradesGPA = grades.map((grade) => {
    let points = 0.0
    if (grade === "A"){
        points = 4.0;

    } else {
        points = 3.0;
    }
    return points;
});

const pointsTotal = gradesGPA.reduce(function (total, item){
    return total + item;
})

const gpa = pointsTotal / gradesGPA.length;

const foods = ['watermelon', 'peach', 'apple', 'tomato', 'grape']

const longFood = foods.filter((x) => x.length < 6);

newNumbers = [12, 34, 21, 54];
luckNumber = 21;
const isLucky = newNumbers.indexOf(luckNumber);

