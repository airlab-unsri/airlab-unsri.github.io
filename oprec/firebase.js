firebase.initializeApp({
    apiKey: "AIzaSyBmnaO8tBRxhRq3y8Bq4xWSfq7xamSFwIA",
    authDomain: "airlab-oprec.firebaseapp.com",
    projectId: "airlab-oprec"
});
const db = firebase.firestore();

async function find( nim ){
    let result = null;
    await db.collection("participants").where("NIM" , "==" , nim).get()
    .then(
        (querySnapshot) => {
            querySnapshot.forEach(element => {
                result = {...element.data()};
            });
        }
    );
    return result;
}

button.addEventListener('click', async ()=>{
    const nim = input.value;
    const result = await find(nim);
    if(result == null) wrongInput();

    if(result.lulus == true) green(result.nama);
    else blue(result.nama);
})