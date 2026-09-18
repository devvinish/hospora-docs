# Workflows

Each workflow follows one patient from the first screen to the last. The steps link to the pages that
explain each screen.

## An O.P.D. visit

1. **Appointment (optional).** The patient phones. The desk books them in
   [Book Appointment](../appointments/book.md) and prints or WhatsApps the slip.
2. **At the desk.**
    - A new patient: [New O.P. Registration](../registration/op-registration.md). Type the mobile number
      first: the family appears if it is already registered.
    - A returning patient: [Renew Registration](../registration/renewal.md). It is free within 15 days of
      the last visit.
    - The fee is taken in cash, by UPI QR or by card, and the O.P. slip is printed.
3. **The queue.** In the [diary](../appointments/index.md#the-diary-of-the-day), **Arrived** gives the
   patient a token.
4. **The doctor**:
    - writes the [consultation](../clinical/consultations.md): vitals, complaints, diagnosis;
    - clicks **Write Prescription** to write the [prescription](../registration/prescriptions.md), with the
      medicines and tests, then prints it;
    - marks the appointment **Seen**.
5. **Tests.** The billing desk makes a [cash bill](../finance/bills.md#cash-bills) and adds the tests of the
   prescription in one step. The laboratory makes the [lab order](../investigation/laboratory.md) from the
   bill.
6. **Medicines.** The pharmacy makes a [medicine bill](../pharmacy/selling.md) and adds the medicines of the
   prescription in one step.
7. **The follow-up day** set by the doctor appears in [Follow-up Recall](../clinical/forms.md#follow-up-recall),
   to call or WhatsApp the patient.

## A lab test

1. [New Lab Order](../investigation/laboratory.md#new-lab-order): the doctor or the desk orders the tests.
   Or order them from the tests of a prescription or a bill.
2. If the tests are not billed, **Bill the Tests** makes the cash bill.
3. **Collect the Samples** and **Print the Labels**: one barcode per tube.
4. [Receive Samples](../investigation/laboratory.md#receive-samples): the laboratory scans each tube as it
   arrives.
5. [Enter the results](../investigation/laboratory.md#enter-the-results), or let the analyser send them.
   Abnormal values are flagged; critical ones appear on the Home page.
6. [Verify and Release](../investigation/laboratory.md#verify-and-release): the pathologist checks and
   releases the report.
7. **Print the Report**, and **WhatsApp** the patient that it is ready.

## From admission to discharge

1. [Find Patient](../registration/find-patient.md), then **Admit**. Choose the ward and bed on the
   [Bed Board](../registration/beds.md). Add the package, if any, and the referrer.
2. Take an [advance](../finance/inpatient-billing.md#advance-receipts).
3. Print the admission consent from **Forms** ([Consents and Forms](../clinical/forms.md)).
4. Every day:
    - the nurse writes the [ward chart](../clinical/inpatient.md#the-ward-chart);
    - the doctor writes consultations on the rounds;
    - tests and services go on [credit bills](../finance/bills.md#credit-bills);
    - transfers are made on the [admission](../registration/admission.md#transfer-to-another-ward-or-bed).
5. An operation: record it in [Operations](../clinical/operations.md), and **Charge to the Bill** the
   implants and consumables used.
6. At discharge:
    - the doctor writes the [discharge summary](../clinical/inpatient.md#discharge-summaries) (**Fill from the
      Notes** writes the course of the stay);
    - billing makes the [I.P. final bill](../finance/inpatient-billing.md#ip-final-bill): **Prepare Bill**,
      add charges, **Apply the Package**, then **Save Bill and Discharge**.
7. What is left to pay: [Payments Received](../finance/inpatient-billing.md#payments-received) or
   [Receive from a Patient](../finance/inpatient-billing.md#receive-from-a-patient).

## A cashless (TPA) admission

1. Admit the patient with the TPA or insurer as the **Empanelment**.
2. [Open a claim](../finance/insurance.md#open-a-claim) for the admission. Fill in the policy details, and
   record **Pre-authorisation sent**.
3. Record the answer: approved (with the amount), a query, or denied.
4. At discharge, make the final bill, then record **Claim sent** with the amount.
5. When the money comes, record **Settled**: the amount, the UTR number, the TDS kept, and what was
   disallowed. Say whether the hospital writes the disallowed part off, or the patient pays it.
6. The [Receivables Ageing](../finance/day-end.md#receivables-ageing) shows claims still waiting.

## The end of the day

1. Each counter: [Day-End Closing](../finance/day-end.md#day-end-closing). Count the notes, check the
   difference, **Close the Day**, and print the handover.
2. Accounts:
    - [Collections by Mode](../finance/day-end.md#collections-by-mode): match the UPI and card totals with
      the bank;
    - [Day Book](../finance/gst-accounts.md#day-book-and-ledger): the vouchers of the day.
3. Monthly:
    - [GST Returns](../finance/gst-accounts.md#gst-returns);
    - [E-Invoices](../finance/gst-accounts.md#e-invoices), if required;
    - the [Accounting Export](../finance/gst-accounts.md#accounting-export) to Tally or Zoho Books;
    - the [doctor and referral shares](../finance/shares.md#doctor-and-referral-shares).
