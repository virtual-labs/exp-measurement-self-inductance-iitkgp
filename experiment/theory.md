# Introduction

In this bridge, an inductance is measured by comparison with a standard variable capacitance. The connection is shown in Figure 1.
<div align="center">

![Rm501 Figure](images/pic1.jpg)

***Figure 1: Circuit diagram for Maxwell's Bridge***
</p>
<div align="left">
Here,
</br>
       L = Unknown Inductance,
       </br>
       R<sub>4</sub> = Effective resistance of unknown Inductance coil,
        </br>
       R<sub>1</sub>, R<sub>2</sub>, R<sub>3</sub> = Known non inductive resistance,
        </br>
       C<sub>1</sub> = Standard variable capacitor.
       </div>
       </br>
       The balance equation for the branch can be written as:
       
$$ (R_4 + j\omega L) * (\frac{R_1}{1 + j\omega C_1R_1}) = R_2R_3; $$ $$ R_1 R_4 + j\omega L R_1 = R_2 R_3 + j\omega R_2 R_3 C_1 R_1; $$

Equating the real and imaginary parts,

$$ R_4 = \frac{R_2 R_3}{R_1} ...... (1)$$ $$ L = R_2 R_3 C_1 ...... (2)$$

Two variables R<sub>1</sub> and C<sub>1</sub> which appear in one of the two balance equations (i.e. equation (1) and (2)) and hence the two equations are independent.
The expression for Q factor can be written as:
    
$$ Q = \frac{\omega L}{R_4} = \omega C_1 R_1 \ Phasor \ Diagram: $$

<div align="center">
<img src="images/pic2.jpg" />

***Fig 2: Phasor diagram for the circuit shown in Figure 1***
</div>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
