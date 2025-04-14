function changeDepartment() {
    var department = document.getElementById('department').value;
    var courseSelect = document.getElementById('course');

    courseSelect.innerHTML = '<option value="">--Select--</option>';

    if (department == "cs") {
        var courses = ["Intro to Programming", "Object-Oriented Programming", "Net Centric Programming"];
    } else if (department == "psychology") {
        var courses = ["Intro to Psychology", "Cognitive Psychology", "Drugs & Behavior"];
    } else if (department == "bio") {
        var courses = ["Cellular and Molecular", "Organismal and Ecological", "Genetics"];
    } else {
        var courses = [];
    }

    for (var i = 0; i < courses.length; i++) {
        var option = document.createElement("option");
        option.text = courses[i];
        courseSelect.add(option);
    }
}
