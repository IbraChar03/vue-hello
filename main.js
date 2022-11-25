const {createApp} = Vue;

 createApp({

    data(){
        return{
            message: "Benvenuto",
            img: "img/img1.jpg",
            classimg: "image"
        }
    }
 }).mount("#app")