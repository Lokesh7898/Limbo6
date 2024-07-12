function toggleFaq(event) {
    const faqHead = event.currentTarget;
    faqHead.classList.toggle('active');
}

function submitForm(event) {
    event.preventDefault();

    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    document.getElementById('contactForm').reset();

    setTimeout(function() {
        successMessage.style.display = 'none';
    }, 2000); 
}

  // Modal Window..... 
  document.addEventListener('DOMContentLoaded', function () {
    const openModalButton = document.getElementById('open-modal');
    const closeModalButton = document.getElementById('close-modal');
    const cancelButton = document.getElementById('cancel-button');
    const modal = document.getElementById('modal');
    const acceptButton = document.getElementById('accept');
  
    function openModal() {
      modal.classList.add('open');
    }
  
    function closeModal() {
      modal.classList.remove('open');
    }
  
    function acceptModal(){
      modal.classList.remove('open');
    }
  
  
    openModalButton.addEventListener('click', openModal);
    closeModalButton.addEventListener('click', closeModal);
    cancelButton.addEventListener('click', closeModal);
    acceptButton.addEventListener('click', acceptModal);
    
  
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  });
  
    document.addEventListener('DOMContentLoaded', function () {
    const openModalButton = document.getElementById('open-modal-privacy');
    const closeModalButton = document.getElementById('close-modal-privacy');
    const cancelButton = document.getElementById('cancel-button-privacy');
    const acceptButton = document.getElementById('acceptPrivacy');
    const modalPrivacy = document.getElementById('modal-privacy');
  
    function openModalPrivacy() {
      modalPrivacy.classList.add('open')
    }
  
    function closeModalPrivacy() {
      modalPrivacy.classList.remove('open');
    }
  
    function acceptModalPrivacy() {
      modalPrivacy.classList.remove('open');
    }
  
  
  
    openModalButton.addEventListener('click', openModalPrivacy);
    closeModalButton.addEventListener('click', closeModalPrivacy);
    cancelButton.addEventListener('click', closeModalPrivacy);
    acceptButton.addEventListener('click', acceptModalPrivacy);
    
  
    window.addEventListener('click', function (event) {
      if (event.target === modalPrivacy) {
        closeModalPrivacy();
      }
    });
  });
  

// nav Toggle.....
document.getElementById("nav-toggle").addEventListener("click", function() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "100vw") {
      sidebar.style.width = "0";
    } else {
      sidebar.style.width = "100vw";
    }
  });
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
  }
  