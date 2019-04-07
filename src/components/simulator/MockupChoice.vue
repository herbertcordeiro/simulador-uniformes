<template>
    <ul>
        {{mockups}}
    </ul>
</template>

<script>
import axios from 'axios'

export default {
    name: "MockupChoice",
    data: function() {
        return {
            mockups: []
        }
    },
    created: function() {
        axios
            .get("http://simulador-back.herokuapp.com/mockups")
            .then(response => {
                console.log(response)
                this.mockups = response.data;
            })
            .catch(e => {
                console.log("error");
            });
    }
}
</script>