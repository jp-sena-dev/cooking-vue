<template>
  <header class="banner">
    <div class="apresentation">
      <img src="../assets/images/logo.svg" alt="logo cooking" class="logo">

      <p class="header-lg header-phrase">
        A feast of flavors to awaken 
        <span class="green-text">the chef within you!</span>
      </p>

      <p class="caption-lg">
        Embark on a culinary adventure daily, with ingredients within arm's reach, unveiling new recipes!
      </p>
    </div>

    <img src="../assets/images/banner.png" alt="foto de uma mulher cozinhando com uma baci de virdro" class="image-banner">
  </header>
</template>

<style scoped>
.banner {
  padding: 4rem 7.5rem;
  color: var(--medium-gray);

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 3.25rem;
}

.logo {
  height: 4.5rem;
  margin-bottom: 3rem;
}

.header-phrase {
  margin-bottom: 2rem;
}

.green-text {
  color: var(--medium-green, #3D6D4A);
}

.image-banner {
  width: 35rem;
}

@media only screen and (max-width: 1300px) {
  .banner {
    padding: 4rem 3.75rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (max-width: 767px) {
  .banner {
    padding: 4rem 1.5rem;
  }

  .image-banner {
    width: min(100%, 21.25rem);
  }
}
</style>