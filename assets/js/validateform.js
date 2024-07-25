<script>
    function validateform() {
        var name=document.myform.name.value;
        var password=document.myform.password.value;
        if(name==null || name==""){
            alert('enter yor first name')
        }else if(password.lenth<6){
            alert('password must be six charater')
        }
    }
</script>