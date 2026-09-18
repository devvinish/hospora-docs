# New O.P. Registration

Register a patient who comes to the hospital for the first time. The patient gets a **C.R. No.** and a
bill for the registration fee.

Open **Registration > New O.P. Registration**, or click the **New O.P. Registration** tile on the Home
page.

![An empty registration form](../assets/screens/registration/op-new.png)

The form has three parts:

- <span class="n">1</span> **Mobile No.**: start here;
- <span class="n">2</span> **Patient**: who the patient is;
- <span class="n">3</span> **Visit and Fee**: which unit and doctor the patient sees, and how the fee is paid.

<span class="n">4</span> **Save Registration** saves the form.

## Step 1 - the mobile number

Type the patient's mobile number in **Mobile No.** and press ++tab++.

- **Nobody has this number yet.** Nothing opens. Go on to step 2.
- **The number is already registered.** A list of the patients with this number opens:

![The patients already registered with this mobile number](../assets/screens/registration/op-family-picker.png)

Choose one of three:

| Button | When |
|---|---|
| **Renew Visit** | The patient in this row has come again. You are taken to [Renew Registration](renewal.md). Do **not** register them a second time. |
| **Same Family** | A new member of this family, e.g. a child of a registered mother. The address is copied from this row; fill in the name, age and sex. |
| **New Patient** | Someone else who happens to use the same phone. The form stays empty. |

The **Family - Registered with this Mobile No.** panel under the form keeps showing the family while you
work. Its **Use this address** link copies an address at any time.

## Step 2 - the patient

Fill in:

- **Patient Name**, **Age**, **Age In** (years, months or days) and **Sex** (required);
- **Relation** (S/O, D/O, W/O ...) and **Father / Husband / Guardian**;
- **House No.**, **Area**, **Village / Post**, **District** and **State**. District and State start with the
  hospital's own.

!!! tip "Duplicate check"
    When the name and the guardian are filled in, a warning appears next to the name if a patient with
    the same name and guardian is already registered (*Possible duplicate*). Check the
    [Patient History](patient-history.md) before you save.

## Step 3 - the visit and the fee

![The Visit and Fee part, paid by UPI](../assets/screens/registration/op-new-filled.png)

1. <span class="n">1</span> **Unit**: the department the patient will see (Medicine, Surgery, Obst /
   Gynae ...). Its **Room No.** fills in.
2. <span class="n">2</span> **Doctor**: the doctor of the visit. This doctor is filled in automatically on
   the patient's later screens (bills, lab orders, admission), where it can still be changed.
3. **Category**:
    - **E - Paid registration**: the usual case;
    - **F - Free registration**: no fee;
    - **N - Provisional**: a registration completed later;
    - **C - Paid (receipt form)**: paid on the printed receipt form.
4. **Reg. Fee** comes from the hospital's settings. A **Discount** lowers what the patient pays.
5. **Empanelment**: **SELF** for a patient who pays, or the company / scheme that pays for the patient.
6. **Referred By**: the clinic or doctor who sent the patient, if any. It decides the referral share
   (Finance > Doctor and Referral Shares).
7. <span class="n">3</span> **Paid By**: cash, UPI / QR code, card, wallet, payment link, bank transfer or
   cheque.
8. <span class="n">4</span> **Transaction ID / Ref. No.**: for anything other than cash, the UPI
   reference, the card approval code or the cheque number.
9. <span class="n">5</span> **UPI QR Code**: with **UPI / QR code**, a QR code of the exact amount
   appears. The patient scans it with any UPI app; type the UPI reference the patient's app shows into
   **Transaction ID**.

!!! note "The UPI QR code needs the hospital's UPI ID"
    The QR code pays the UPI ID set in **Administration > Hospital Details**. Without one, no code is
    shown.

### Paid in two ways

A patient may pay part by UPI and the rest in cash. Turn **Paid in Two Ways** to **Yes**:

![A fee paid partly by UPI and partly in cash](../assets/screens/registration/op-split-payment.png)

1. <span class="n">1</span> **Paid in Two Ways**: **Yes**.
2. <span class="n">2</span> **Rest Paid By**: the second mode, e.g. **Cash**.
3. <span class="n">3</span> **Amount by the Second Mode**: the part paid that way. The QR code changes to
   the UPI part only.

## Step 4 - save and print

Click **Save Registration**. The patient gets <span class="n">1</span> a **C.R. / O.P. No.** and
<span class="n">2</span> a **Bill No.** for the fee.

![A saved registration](../assets/screens/registration/op-saved.png)

<span class="n">3</span> **Print** shows the O.P. slip with the fee receipt. **Print** in that window sends
it to the printer, and **Share** sends it as a PDF. The patient takes the slip to the doctor.

![The printed O.P. slip](../assets/screens/registration/op-print.png)

**New Registration** clears the form for the next patient.

## The list of registrations

**Registration > O.P. Registrations** lists every registration, newest first:

![The list of O.P. registrations](../assets/screens/registration/op-list.png)

- Click the pencil of a row to open the registration and correct it.
- <span class="n">1</span> **New Registration** opens an empty form.
- **Print** prints the list as it is filtered.
- **Actions** filters, sorts and chooses columns, and downloads the list as Excel, CSV or PDF.

!!! question "Something went wrong?"
    - *"Enter the 10-digit mobile number, or leave it empty."*: the number is too short or too long.
      Leave it empty if the patient has no phone.
    - *The patient was registered twice*: open the newer registration and correct it, or ask the
      administrator. Use **Renew Visit** next time the patient comes.
