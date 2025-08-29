document.addEventListener("DOMContentLoaded", () => {
  const notification = document.getElementById("purchase-notification");
  const closeBtn = document.getElementById("close-notification");
  const notificationImage = notification.querySelector("img");
  const notificationContent = notification.querySelector(".content p");

  if (!notification || !closeBtn) {
    return;
  }

  const userPurchases = [
    {
      name: "Jessica M.",
      location: "California, USA",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=80",
    },
    {
      name: "Mike R.",
      location: "Toronto, Canada",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=80",
    },
    {
      name: "Emily S.",
      location: "Sydney, Australia",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=80",
    },
     {
      name: "David L.",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=80",
    },
  ];

  const showNotification = () => {
    const randomPurchase = userPurchases[Math.floor(Math.random() * userPurchases.length)];

    notificationImage.src = randomPurchase.image;
    notificationContent.innerHTML = `<strong>${randomPurchase.name}</strong> from ${randomPurchase.location}<br>just purchased HealthPlus!`;

    notification.classList.add("show");

    // Hide the notification after 5 seconds
    setTimeout(() => {
      notification.classList.remove("show");
    }, 5000);
  };

  // Show the first notification after a random delay
  setTimeout(showNotification, Math.random() * 5000 + 3000);

  // Periodically show new notifications
  setInterval(showNotification, Math.random() * 15000 + 8000);

  // Close button functionality
  closeBtn.addEventListener("click", () => {
    notification.classList.remove("show");
  });
});
