<template>
    <div class="container-base-simulator">
        <OptionsSimulator />
        <MockupSport />
        <OptionsUser />
    </div>
</template>

<script>
    import axios from 'axios'

    import OptionsSimulator from '@/components/simulator/OptionsSimulator'
    import MockupSport from '@/components/simulator/MockupSport'
    import OptionsUser from '@/components/simulator/OptionsUser'

    const colors = ["#FFFFFF", "#000000	", "#000080", "#006400", "#D2691E", "#FF0000", "#FF1493", "#FF00FF"];
    let item;
    let choices = document.getElementById('choices');
    console.log(choices)
    let details1 = document.getElementById('details-01');
    let details2 = document.getElementById('details-02');
    let details3 = document.getElementById('details-03');
    let details4 = document.getElementById('details-04');
    let details5 = document.getElementById('details-05');
    colors.forEach( (color) =>{
        let button = document.createElement('button');
        button.value = color;
        button.type = 'button';
        button.style.backgroundColor = color;
        button.addEventListener('click', handler(button));
        // choices.appendChild(button);
    });
    function handler(el, value) {
        return () => {
            if(item == 1) { 
                details1.style.fill = el.value;
            } else if(item == 2) {
                details2.style.fill = el.value;
            } else if(item == 3) {
                details3.style.fill = el.value;
            } else if(item == 4) {
                details4.style.fill = el.value;
            } else if(item == 5) {
                details5.style.fill = el.value;
            }
        }
    }
export default {
    name: 'BaseSimulator',
    components: { 
        OptionsSimulator,
        MockupSport,
        OptionsUser
    },
    data: function() {
        return {
            shirts: [],
            shorts: [],
            socks: []
        }
    },
    methods: {
        option: function(value) {
        this.item = value;
        }
    },
    created: function() {
        axios
            .get("https://simulador-back.herokuapp.com/shirts")
            .then(response => {
                response.data.forEach(item => {
                    this.shirts.push(item.svg)
                });
            })
            .catch(e => {
                console.log(e);
            });
        axios
            .get("https://simulador-back.herokuapp.com/shorts")
            .then(response => {
                response.data.forEach(item => {
                    this.shorts.push(item.svg)
                });
            })
            .catch(e => {
                console.log(e);
            });
        axios
            .get("https://simulador-back.herokuapp.com/socks")
            .then(response => {
                response.data.forEach(item => {
                    this.socks.push(item.svg)
                });
            })
            .catch(e => {
                console.log(e);
            });
    },
}
</script>

<style>

.container-base-simulator {
    display: grid;
    height: 100vh;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "options-simulator mockup options-user";
    grid-template-rows: 1fr;
}

</style>
