
// const numbers = document.querySelector("#numberWrapper");

// const initialValue = document.querySelector("input")[0];
// let numberArray = [0,1,2,3,4,5,6,7,8,9];
// clickfunc = (e) => {
//     console.log("e.target.value")
// }
// const operationList = () => {
    
//     for (let i = 0 ; i < numberArray.length ; i++){
//         let number = document.createElement("button");
//         number.className = "number";
//         number.innerHTML = numberArray[i];
        
//         // number.addEventListener('onclick', clickfunc)
//         number.onclick = (e)=> console.log(e);
//         numbers.appendChild(number);

//     }
    
// }
// operationList();


const app = {
    data(){
        return {
            value: "",
            // lastValue: "",
        }
    },
    methods: {
        keyCode(n){
            return this.value += n
        },
        equalInt() {
            console.log(this.value)
            if (isNaN(eval(this.value))){
                alert("hata");
            }else {
                this.value = eval(this.value);
            }
        },
        toPercentage(){
            alert("Sorry this button is here for good-looking grid :(((");
        },
        clearInt(){
            this.value = "";
        }

        
        
    }
};
Vue.createApp(app).mount("#app");