# Calculadora de Velocidad de Corrosión

Calculadora web sencilla para estimar la **velocidad de corrosión** mediante el **método gravimétrico (pérdida de masa)**, basada en la práctica estándar **ASTM G31**.

Este proyecto está pensado como una herramienta **rápida y práctica de laboratorio**, y como parte de mi portafolio académico y profesional.

---

## 🧪 Fundamento teórico

La velocidad de corrosión se calcula a partir de la pérdida de masa de una muestra metálica expuesta a un medio corrosivo:

\[
V_{corr} = \frac{p_i - p_f}{A \cdot t}
\]

Donde:
- \( p_i \): peso inicial (g)  
- \( p_f \): peso final (g)  
- \( A \): área expuesta (cm²)  
- \( t \): tiempo de exposición (h)

La pérdida de masa se convierte de **gramos a miligramos** para mejorar la resolución numérica.

**Unidades finales:**  
**mg/cm²·h**

---

## ⚙️ ¿Qué hace esta calculadora?

✔ Calcula la **pérdida de masa real medida**  
✔ Normaliza por área y tiempo  
✔ Permite una evaluación rápida en laboratorio  

✖ No predice corrosión futura  
✖ No evalúa mecanismos electroquímicos  
✖ No compara distintos entornos corrosivos  

---

## 🧾 Pasos experimentales recomendados

1. Medir las dimensiones de la muestra en cm.  
2. Calcular el área expuesta.  
3. Registrar el peso inicial (g).  
4. Exponer la muestra al medio corrosivo.  
5. Registrar el tiempo de exposición (h).  
6. Limpiar la muestra según ASTM G31 y medir el peso final.  
7. Ingresar los datos en la calculadora.

---

## 🛠️ Tecnologías utilizadas

- **HTML**
- **CSS**
- **JavaScript (Vanilla)**

No requiere librerías externas.

---

## 📂 Estructura del proyecto
corrosion-rate-calculator
│── index.html
│── css/
│ └── style.css
│── js/
│ └── script.js
│── js/
│ ├── formula.png
│ └── cupon.png
└── README.md

---

## 📚 Referencias

- ASTM G31 – Standard Practice for Laboratory Immersion Corrosion Testing.  
- Arwati, I., & Ifani, F. (2022). *Corrosion Rate Analysis of JIS G-3141 Steel for Automotive Inner Wheel House Production with Weight Loss Method*. World Chemical Engineering Journal.  
- Pérez, E., Gutiérrez, J., Ortega, L., & Mirabal, J. (2018). *Aplicación de softwares estadísticos y modelos matemáticos para la evaluación de la velocidad de corrosión en el acero*.

---

## 👩‍🔬 Autora

**Ruth Eugenia Flórez Villegas**  
Ingeniera metalúrgica  
Desarrolladora web junior en formación

---

