<template>
  <footer class="footer">
    <span>
      <h2>Feito utilizando a dogapi ©todos os direitos reservados</h2>
    </span>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
  .footer {
    position: fixed;
    bottom: 0;
    background: black;
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer h2 {
    color: #fff;
  }

  @media screen and (max-width:720px){
    .footer h2 {
      font-size: small;
    }
  }
</style>