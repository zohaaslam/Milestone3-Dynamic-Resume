document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const displayPicture = document.getElementById("displayPicture") as HTMLImageElement;
    const displayName = document.getElementById("displayName") as HTMLHeadingElement;
    const displayEmail = document.getElementById("displayEmail") as HTMLParagraphElement;
    const displayPhone = document.getElementById("displayPhone") as HTMLParagraphElement;
    const displayEducation = document.getElementById("displayEducation") as HTMLParagraphElement;
    const displayExperience = document.getElementById("displayExperience") as HTMLParagraphElement;
    const displaySkills = document.getElementById("displaySkills") as HTMLParagraphElement;
    const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
        const profilepicture = (document.getElementById("profilepicture") as HTMLInputElement).files?.[0];

        // Update the resume display
        displayName.textContent = name;
        displayEmail.textContent = `Email: ${email}`;
        displayPhone.textContent = `Phone: ${phone}`;
        displayEducation.textContent = education;
        displayExperience.textContent = experience;
        displaySkills.textContent = skills;

        if (profilepicture) {
            const reader = new FileReader();
            reader.onload = function (e) {
                displayPicture.src = e.target?.result as string;
            };
            reader.readAsDataURL(profilepicture);
        }

        // Show the resume output
        resumeOutput.style.display = "block";
    });
});
