document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    var displayPicture = document.getElementById("displayPicture");
    var displayName = document.getElementById("displayName");
    var displayEmail = document.getElementById("displayEmail");
    var displayPhone = document.getElementById("displayPhone");
    var displayEducation = document.getElementById("displayEducation");
    var displayExperience = document.getElementById("displayExperience");
    var displaySkills = document.getElementById("displaySkills");
    var resumeOutput = document.getElementById("resumeOutput");
    form.addEventListener("submit", function (event) {
        var _a;
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        var profilepicture = (_a = document.getElementById("profilepicture").files) === null || _a === void 0 ? void 0 : _a[0];
        // Update the resume display
        displayName.textContent = name;
        displayEmail.textContent = "Email: ".concat(email);
        displayPhone.textContent = "Phone: ".concat(phone);
        displayEducation.textContent = education;
        displayExperience.textContent = experience;
        displaySkills.textContent = skills;
        if (profilepicture) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                displayPicture.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            };
            reader.readAsDataURL(profilepicture);
        }
        // Show the resume output
        resumeOutput.style.display = "block";
    });
});
