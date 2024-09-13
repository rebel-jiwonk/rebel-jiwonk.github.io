<div class="product-title">RBLN-CA12</div>

<div class="product-data-sheet">PRODUCT<br>DATA SHEET</div>

<div class="product-pn">(P/N: RBABB1G6ANBD)</div>

# 1. Overview

---

The Rebellions RBLN-CA12 accelerator card is a full height, full-length (FHFL), single-slot 10.5-inch PCI Express Gen5 equipped with ATOM™, Rebellions’ System-on-Chip (SoC) designed for deep learning inference. The card is passively cooled.

RBLN-CA12 supports AI inference tasks for various neural network models, including Convolutional Neural Network, Recurrent Neural Network, and Transformers. The card mainly targets inference acceleration on edge-computing platforms as well as High Performance Computing (HPC) workloads. It can be deployed in cloud data center for scalable AI applications.

<figure markdown="span">
  <img src="../assets/images/rblnca12_figure_1.png" alt="Figure 1">
  <figcaption>
  Figure 1. Rebellions RBLN-CA12 PCIe Card (FHFL, Single Slot)
  </figcaption>
</figure>

# 2. Specifications

---

## 2.1. Product Specifications

Table 1 through Table 3 provide the product, memory, and software specifications for the RBLN-CA12 PCIe card.

<figcaption>
  Table 1. Product Specifications
</figcaption>
<table>
    <tr>
        <td>Specification</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>Product SKU</td>
        <td>RBABB1G6ANBD</td>
    </tr>
    <tr>
        <td>Single chip - FP16</td>
        <td>FP16 32TFLOPS</td>
    </tr>
    <tr>
        <td>INT8/INT4</td>
        <td>128 TOPS/ 256 TOPS</td>
    </tr>
    <tr>
        <td>On-chip SRAM</td>
        <td>64 MB</td>
    </tr>
    <tr>
        <td>Multi-Instance NPU	</td>
        <td>HW isolation up to 16 Independent tasks</td>
    </tr>
    <tr>
        <td>Thermal solution</td>
        <td>Passive</td>
    </tr>
    <tr>
        <td>Mechanical Form Factor</td>
        <td>Full-height, Full-length (FHFL)</td>
    </tr>
    <tr>
        <td>Thermal Design Power (TDP)</td>
        <td>75W</td>
    <tr>
        <td>Input voltage</td>
        <td>DC 12 V  (From CPU 8-pin power connector) <br> DC 3.3 V   (3.3Vaux from PCIe card connector)</td>
    </tr>
    <tr>
        <td>AI Accelerator SKU</td>
        <td>SCD4DC2GD64P5ACA53E1</td>
    </tr>
    <tr>
        <td>PCIe Device IDs</td>
        <td>Device ID: 0x1120, Vendor ID: 0x1eff</td>
    </tr>
    <tr>
        <td>AI Accelerator Clock</td>
        <td>Base: 1.5GHz</td>
    </tr>
    <tr>
        <td>PCIe interface</td>
        <td>PCIe Gen5 x16 <br> Lane and polarity reversal supported<br> Bifurcation not supported</td>
    </tr>
    <tr>
        <td>Connectors	</td>
        <td>CPU 8-pin power connector (2x4) x 1EA</td>
    </tr>
    <tr>
        <td>Weight	Total</td>
        <td>615 g</td>
    </tr>
</table>

<figcaption>
  Table 2. Memory Specifications
</figcaption>

<table>
    <tr>
        <td>Specification</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>Memory clock</td>
        <td>8,000MHz</td>
    </tr>
    <tr>
        <td>Memory type</td>
        <td>GDDR6</td>
    </tr>
    <tr>
        <td>Memory size</td>
        <td>16 GB</td>
    </tr>
    <tr>
        <td>Memory bus width</td>
        <td>128 bits</td>
    </tr>
    <tr>
        <td>Peak memory bandwidth</td>
        <td>256GB/s</td>
    </tr>
</table>

<figcaption>
  Table 3. Software Specifications 
</figcaption>

<table>
    <tr>
        <td>Specification</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>SR-IOV support</td>
        <td>4 virtual functions</td>
    </tr>
    <tr>
        <td>BAR address (physical functions)</td>
        <td>BAR0: 16 GiB<br>BAR2: 32 MiB<br>BAR4: 16 MiB<br>BAR5: 1 MiB</td>
    </tr>
    <tr>
        <td>BAR address (virtual functions)</td>
        <td>BAR0: 1 GiB<br>BAR2: 32 MiB<br>BAR4: 4 KiB<br>BAR5: 8 KiB</td>
    </tr>
    <tr>
        <td>Message Signaled Interrupts</td>
        <td>MSI-X: Supported <br> MSI: Not Supported</td>
    </tr>
    <tr>
        <td>ARI forwarding</td>
        <td>Supported</td>
    </tr>
    <tr>
        <td>Secure boot</td>
        <td>To be supported in 2Q of ‘25</td>
    </tr>
    <tr>
        <td>RBLN SDK support</td>
        <td>Supported</td>
    </tr>
    <tr>
        <td>PCI class code</td>
        <td>0x12 (Processing Accelerator)</td>
    </tr>
    <tr>
        <td>PCI subclass code</td>
        <td>0x00</td>
    </tr>
    <tr>
        <td>ECC support</td>
        <td>Disabled (default); can be enabled by software</td>
    </tr>
    <tr>
        <td>SMBus/MCTP/PLDM (8-bit address)</td>
        <td>0xCE (write) / 0xCF (read)</td>
    </tr>
    <tr>
        <td>RBLN-I2C address (0x65, 7bit)</td>
        <td>0xCA (write) / 0XCB (read)</td>
    </tr>
</table>

## 2.2.	Environmental and Reliability Specifications 

Table 4 provides the environment conditions specifications for the RBLN-CA12 PCIe card.

<figcaption>
Table 4.  Board Environmental and Reliability Specifications
</figcaption>
<table>
    <tr>
        <td>Specification</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>Ambient operating temperature (short term)<sup>1</sup></td>
        <td>Max 50°C</td>
    </tr>
    <tr>
        <td>Ambient operating temperature</td>
        <td>Max 55°C</td>
    </tr>
    <tr>
        <td>Storage temperature</td>
        <td>-40 to 85 °C</td>
    </tr>
    <tr>
        <td>Operating humidity</td>
        <td>Max 90 % RH</td>
    </tr>
    <tr>
        <td>Operating humidity (short term)<sup>1</sup></td>
        <td>Max 95% RH at 35°C</td>
    </tr>
    <tr>
        <td>Storage humidity</td>
        <td>5% to 95%</td>
    </tr>
    <tr>
        <td>Mean Time Between Failure (MTBF)<sup>2</sup></td>
        <td>2.0 Mhrs at 35°C</td>
    </tr>
</table>
<p class="note">Notes: Specifications in this table are applicable up to 6000 feet.<br>
1. A period not more than 96 hours consecutive, not to exceed 15 days per year.<br>
2. No environmental stress with optimum operation and maintenance (GB35).</p>

### Airflow Direction

Passive cooling cards do not include a built-in fan and therefore require an external mechanism to ensure proper airflow for cooling. Passive cooling cards should be powered withs a forced airflow mechanism in place. The passively cooled RBLN-CA12 card supports bidirectional airflow as illustrated in Figure 6.

<figure markdown="span">
  <img src="../assets/images/rblnca12_figure_2.png" alt="Figure 2">
  <figcaption>
  Figure 2. Airflow Direction
  </figcaption>
</figure>
<p class="note">Notes: Conditions other than bidirectional flow are also possible. However, this is specific to server configurations, and testing is performed by individual OEMs. Contact your server provider for more information and options.</p>

### Operating Conditions

Details of operating conditions be updated in the official v1.0 document.

#### _Temperature Gradient_
The RBLN-CA12 accelerator card and its thermal management device should be able to operate at a temperature/time gradient of 15°C/hour in its ambient surroundings. The thermal management device is the heat sink, shroud, backplate, top plate, and fan (for active solutions).

#### _Humidity_
The RBLN-CA12 accelerator card and its thermal management device should be able to operate in a RH (relative humidity) range of 8% to 90%.

#### _Storage and Non-Operating Conditions_
The RBLN-CA12 accelerator card and its thermal management device should be stored or maintained in non-operating conditions in a RH range of 5% to 95% without condensation and an ambient temperature range of –40°C to 85°C.

# 3. Architectural Features
---
## Form Factor

<figure markdown="span">
  <img src="../assets/images/rblnca12_figure_3-1.png" alt="Figure 3">
  <figcaption>
 (CARD DIMENSIONS)
  </figcaption>
</figure>

<figure markdown="span">
  <img src="../assets/images/rblnca12_figure_3-2.png" alt="Figure 3">
  <img src="../assets/images/rblnca12_figure_3-3.png" alt="Figure 3">
  <figcaption>
 (ISOVIEW) <br> Figure 3. RBLN-CA12 PCIe Card Dimensions
  </figcaption>
</figure>

## Board Diagram

Figure 4 shows the components of the RBLN-CA12 card with the ATOM™ chip. The card has a Satellite Management Controller (SMC) that performs board management operations while communicating to the host or BMC units via SMBus interfaces.

<figure markdown="span">
  <img src="../assets/images/rblnca12_figure_4.png" alt="Figure 4">
  <figcaption>
 (ISOVIEW) <br> Figure 4. RBLN-CA12 Board Diagram
  </figcaption>
</figure>

## PCI Connector/Data Rate

The RBLN-CA12 card uses an ATOM™ chip with a PCIe Gen5 x16 interface. The card supports PCIe 5.0 with 32 GT/s. The PCIe only can be configured to 16 lanes interfaces for either Gen5 specification or the lower specifications without supporting bifurcation.

## Satellite Management Controller (SMC)

A CEC1736 resides on the RBLN-CA12 to control and monitor voltages, current and temperatures. The host server Board Management Controller (BMC) can interact with the SMC to monitor and control the card through out-of-band communication. RBLN SDK supports the PLDM protocol over MCTP SMBus, complying with DMTF standards. Using RBLN SDK, customers can conveniently monitor for any abnormal operation conditions and react proactively.  
