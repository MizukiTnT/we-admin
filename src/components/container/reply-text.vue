<template>
  <div class="text-area">
    <textarea id="text">

    </textarea>
    <div class="submit">
      <button id="submit">保存</button>
      <button id="cancel">取消</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style scoped>
  #text {
    width: 100%;
    height: 350px;
    overflow-y: hidden;
    resize: none;
    margin-top: 30px;
    border: 1px solid #dbdbdb;
  }
  .submit {
    margin-top: 10px;
  }
  .submit button {
    background-color: #fff;
    margin-right: 10px;
    padding: 10px 20px;
    color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    cursor: pointer;
  }
  #submit {
    background-color:#20bc56;
    border: 1px solid #20bc56;
  }
  #cancel {
    background-color: #dbdbdb;
  }
</style>
