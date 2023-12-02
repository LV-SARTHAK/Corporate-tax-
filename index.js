document.addEventListener("DOMContentLoaded", function () {
  let currentStep = 1;
  const totalSteps = 5;

  // Fetch country data
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      const countryDropdown = document.getElementById("countryDropdown");
      const countryOptions = document.createElement("div");

      // Add a class to the countryOptions container
      countryOptions.classList.add("countrydropdown-options");
      console.log(data[0]);

      data.sort((a, b) => {
        const nameA = a.name.common.toUpperCase();
        const nameB = b.name.common.toUpperCase();
        return nameA.localeCompare(nameB);
      });
      showSelectedImage(
        data[0].flags.png,
        data[0].idd.root + data[0].idd.suffixes[0]
      );

      data.forEach((country) => {
        const option = document.createElement("div");
        option.value = country.cca2;
        option.classList.add("country-option");

        const label = document.createElement("label");

        const img = document.createElement("img");
        img.src = country.flags.png;
        img.alt = country.name.common;
        img.classList.add("country-flag");
        label.appendChild(img);

        option.appendChild(label);
        const span1 = document.createElement("span");
        span1.classList.add("country-name");
        span1.appendChild(document.createTextNode(country.name.common));
        option.appendChild(span1);
        const span2 = document.createElement("span");
        span2.classList.add("country-code");
        span2.appendChild(
          document.createTextNode(
            `${
              country.idd.root +
              (country.idd.suffixes && country.idd.suffixes[0])
            }`
          )
        );
        option.appendChild(span2);
        option.addEventListener("click", () => {
          showSelectedImage(
            country.flags.png,
            country.idd.root + country.idd.suffixes[0]
          );
          countryOptions.classList.remove("open");
        });

        countryOptions.appendChild(option);
      });
      countryDropdown.appendChild(countryOptions);

      document
        .getElementById("selectedImageContainer")
        .addEventListener("click", () => {
          countryOptions.classList.toggle("open");
        });
    })
    .catch((error) => console.error("Error fetching data:", error));

  document.addEventListener("click", (event) => {
    const countryOptions = document.querySelector(".countrydropdown-options");
    const countryDropdown = document.getElementById("countryDropdown");
    if (
      !countryDropdown.contains(event.target) &&
      countryOptions.classList.contains("open")
    ) {
      countryOptions.classList.remove("open");
    }
  });
  // Function to show the selected country's image
  function showSelectedImage(imageSrc, countrycode) {
    const selectedImageContainer = document.getElementById(
      "selectedImageContainer"
    );

    // Remove previous image if exists
    selectedImageContainer.innerHTML = "";
    const countrycodediv = document.createElement("div");
    countrycodediv.appendChild(document.createTextNode(countrycode));

    countrycodediv.classList.add("country-code");
    selectedImageContainer.appendChild(countrycodediv);
    countrycodediv.id = "step-1-country-code";

    const selectedImage = document.createElement("img");
    selectedImage.src = imageSrc;
    selectedImage.alt = "Selected Country Flag";
    selectedImage.classList.add("country-flag");
    selectedImageContainer.appendChild(selectedImage);
  }

  function showStep(stepNumber) {
    for (let i = 1; i <= totalSteps; i++) {
      const step = document.getElementById(`costformstep-${i}`);
      const step1 = document.getElementById(`costform_1_step${i}`);
      const heading = document.getElementById(`costform_2_${i}`);
      const nextButton = document.getElementById("nextBtn-1");
      const mobilenextButton = document.getElementById("mobile-nextBtn-1");
      const getacall = document.getElementById("costformgetacall");
      const mobilegetacall = document.getElementById("mobile-costformgetacall");
      const prevButton = document.getElementById("prevBtn-1");
      const mobileprev = document.getElementById("mobile-prevBtn-1");
      if (stepNumber == 4) {
        nextButton.style.display = "none";
        getacall.style.display = "flex";
        mobilegetacall.style.display = "flex";
        mobilenextButton.style.display = "none";
      } else {
        nextButton.style.display = "flex";
        getacall.style.display = "none";
        mobilegetacall.style.display = "none";
        mobilenextButton.style.display = "flex";
      }

      if (i === stepNumber) {
        if (step) {
          step.style.display = "block";
        }
        if (step1) {
          step1.style.display = "flex";
        }
        if (heading) {
          heading.style.display = "block";
        }
      } else {
        if (step) {
          step.style.display = "none";
        }
        if (step1) {
          step1.style.display = "none";
        }
        if (heading) {
          heading.style.display = "none";
        }
      }
    }
  }

  function updateStepNavigation() {
    const prevButton = document.getElementById("prevBtn-1");
    const nextButton = document.getElementById("nextBtn-1");
    const mobileprev = document.getElementById("mobile-prevBtn-1");
    const mobilenextButton = document.getElementById("mobile-nextBtn-1");

    if (currentStep === 1) {
      prevButton.style.background = "#F5F5F5";
      prevButton.style.color = "#C1C1C1";
      mobileprev.style.background = "#F5F5F5";
      mobileprev.style.color = "#C1C1C1";
    } else {
      prevButton.style.background = "#F5F5F5";
      prevButton.style.color = "#000";
      mobileprev.style.background = "#F5F5F5";
      mobileprev.style.color = "#000";
    }

    if (currentStep === totalSteps) {
      nextButton.style.color = "#C1C1C1";
      mobilenextButton.style.color = "#C1C1C1";
    } else {
        nextButton.style.color = "#FFF";
        mobilenextButton.style.color = "#FFF";
    }
  }

  function submitform(){
    const input_1 = document.getElementById("Calculatestep1_1").value;
    const input_3 = document.getElementById("Calculatestep1_3").style.display === "none"?"No":"Yes";
    const input_4 = document.getElementById("Calculatestep1_4").style.display === "none"?"No":"Yes";
    const input_5 = document.getElementById("Calculatestep2_1").value;
    const input_6 = document.getElementById("Calculatestep2_2").value;
    const input_7 = document.getElementById("Calculatestep2_3").value;
    const input_8 = document.getElementById("Calculatestep2_4").value;
    const input_9 = document.getElementById("Calculatestep2_5").value;
    const input_11 = document.getElementById("Calculatestep3_1").style.display === "none"?"No":"Yes";
    const input_12 = document.getElementById("Calculatestep3_2").style.display === "none"?"No":"Yes";
    const input_13 = document.getElementById("Calculatestep3_3").style.display === "none"?"No":"Yes";
    const input_14 = document.getElementById("Calculatestep3_4").value;
    const input_15 = document.getElementById("Calculatestep4_1").value;
    const input_16 = document.getElementById("Calculatestep4_2").value;
    const input_17 = document.getElementById("Calculatestep4_3").value;
    const input_18 = document.getElementById("Calculatestep4_4").value;
    const formdata ={
      input_1,
      input_3,
      input_4,
      input_5,
      input_6,
      input_7,
      input_8,
      input_9,
      input_11,
      input_12,
      input_13,
      input_14,
      input_15,
      input_16,
      input_17,
      input_18
    }
    fetch(
      "https://test.wp.levitation.co.in/wp-json/gf/v2/forms/13/submissions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((res) => {
        if (currentStep < totalSteps) {
          currentStep++;
          showStep(currentStep);
          updateStepNavigation();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  showStep(currentStep);
  updateStepNavigation();

  document.getElementById("nextBtn-1").addEventListener("click", function () {
    // if (currentStep == 1) {
    //     if (document.getElementById('coststep1_1').value == "") {
    //         return false;
    //     }
    //     if (document.getElementById('coststep1_2').value == "") {
    //         return false;
    //     }
    //     if (document.getElementById('coststep1_3').value == "") {
    //         return false;
    //     }
    //     if (document.getElementById('coststep1_4').value == "") {
    //         return false;
    //     }

    // } else if (currentStep == 2) {
    //     if (document.getElementById('coststep2_1').value == "") {
    //         return false;
    //     }
    //     if (document.getElementById('coststep2_2').value == "") {
    //         return false;
    //     }
    //     if (document.getElementById('coststep2_3').value == "") {
    //         return false;
    //     }
    // }
    if (currentStep < totalSteps) {
      currentStep++;
      showStep(currentStep);
      updateStepNavigation();
    }
  });

  document.getElementById("prevBtn-1").addEventListener("click", function () {
    if (currentStep > 1) {
      currentStep--;
      showStep(currentStep);
      updateStepNavigation();
    }
  });
  document
    .getElementById("mobile-nextBtn-1")
    .addEventListener("click", function () {
    //   if (currentStep == 1) {
    //     if (document.getElementById("coststep1_1").value == "") {
    //       return false;
    //     }
    //     if (document.getElementById("coststep1_2").value == "") {
    //       return false;
    //     }
    //     if (document.getElementById("coststep1_3").value == "") {
    //       return false;
    //     }
    //     if (document.getElementById("coststep1_4").value == "") {
    //       return false;
    //     }
    //   } else if (currentStep == 2) {
    //     if (document.getElementById("coststep2_1").value == "") {
    //       return false;
    //     }
    //     if (document.getElementById("coststep2_2").value == "") {
    //       return false;
    //     }
    //     if (document.getElementById("coststep2_3").value == "") {
    //       return false;
    //     }
    //   }
      if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
        updateStepNavigation();
      }
    });

  document
    .getElementById("mobile-prevBtn-1")
    .addEventListener("click", function () {
      if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
        updateStepNavigation();
      }
    });
  document
    .getElementById("costformgetacall")
    .addEventListener("click", function () {
   submitform()
    });
  document
    .getElementById("mobile-costformgetacall")
    .addEventListener("click", function () {
    submitform()
    });


});
function toggleRotation(rotationIconId) {
    var icon = document.getElementById(rotationIconId);

    // Toggle rotation by adding or removing the 'rotate' class
    if (!icon.classList.contains("rotate")) {
      icon.style.transform = "rotate(0deg)";
      icon.classList.add("rotate");
    } else {
      icon.style.transform = "rotate(180deg)";
      icon.classList.remove("rotate");
    }
  }

  function toggleDetails(detailsId, rotationIconId) {
    toggleRotation(rotationIconId);
    var details = document.getElementById(detailsId);
    if (details.style.display === "block") {
      details.style.display = "none";
    } else {
      details.style.display = "block";
    }
  }

  // Function to toggle the active/non-active states
  function toggleStates(container) {
      const checkboxActive = container.querySelector('.checkbox-active');
      const checkboxNonActive = container.querySelector('.checkbox-non-active');

      // Toggle the visibility based on the current state
      checkboxActive.style.display = checkboxActive.style.display === 'none' ? 'flex' : 'none';
      checkboxNonActive.style.display = checkboxNonActive.style.display === 'none' ? 'flex' : 'none';
  }

