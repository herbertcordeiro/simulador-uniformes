<template>
    <ul>
        <img v-for="item in mockups" :key="item.id" :src="item.image">
    </ul>
</template>

<script>
import axios from 'axios'

export default {
    name: "MockupChoice",
    data: function() {
        return {
            mockups: [],
            // path: 'volleyball/mockup-volleyball.png',
            // img: require("@/assets/simulator/"+path)
        }
    },
    created: function() {
        axios
            .get("http://simulador-back.herokuapp.com/mockups")
            .then(response => {
                this.mockups = response.data;
                this.mockups.forEach(item => {
                    item.image = require("@/assets/simulator/"+item.name+"/"+item.image);
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

}
</script>