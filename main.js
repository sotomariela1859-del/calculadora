const app = Vue.createApp({

    data() {
        return {
            numero1: 0,
            numero2: 0,
            resultado: 0
        }
    },

    methods: {

        sumar() {
            this.resultado = this.numero1 + this.numero2;
        },

        restar() {
            this.resultado = this.numero1 - this.numero2;
        },

        multiplicar() {
            this.resultado = this.numero1 * this.numero2;
        },

        dividir() {
            if (this.numero2 === 0) {
                this.resultado = "No se puede dividir entre cero";
            } else {
                this.resultado = this.numero1 / this.numero2;
            }
        },

        potencia() {
            this.resultado = Math.pow(this.numero1, this.numero2);
        },

        raiz() {
            if (this.numero1 < 0 || this.numero2 < 0) {
                this.resultado = "No se puede calcular la raíz de un número negativo";
            } else {
                this.resultado =
                    "Raíz de " + this.numero1 + " = " + Math.sqrt(this.numero1) +
                    " | Raíz de " + this.numero2 + " = " + Math.sqrt(this.numero2);
            }
        },

        limpiar() {
            this.numero1 = 0;
            this.numero2 = 0;
            this.resultado = 0;
        }

    }

});

