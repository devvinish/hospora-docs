# FAQ

## Patients

??? question "The patient is registered, but I cannot find them."
    Search by name in [Find Patient](registration/find-patient.md): the patient may have given another
    mobile number before. Once found, renew their visit; the new number is recorded.

??? question "Two members of a family share one phone. Is that a problem?"
    No. Patients with the same mobile number are a **family**: typing the number lists them all, and you
    choose the one who has come. **Same Family** on a new registration copies the address.

??? question "A patient was registered twice by mistake."
    Keep the older registration, and use its C.R. No. from now on. An administrator can correct or cancel
    the newer one.

??? question "Why is the Doctor already filled in?"
    Every screen suggests the doctor the patient is registered with, or the doctor of the current
    admission. Change it if the patient is seeing someone else.

## Payments

??? question "No UPI QR code appears."
    - The hospital's **UPI ID** must be set in
      [Hospital Details](administration/settings.md#hospital-details).
    - The amount must be more than zero.
    - **Paid By** must be **UPI / QR code**.

??? question "The patient paid part in cash and part by UPI."
    Turn **Paid in Two Ways** to **Yes**, and give the second mode and its amount. See
    [Paid in two ways](registration/op-registration.md#paid-in-two-ways).

??? question "The bill says the discount is waiting for approval."
    The discount is above the limit of your role. Someone allowed to approve it does so in
    [Discount Approvals](finance/rates.md#discount-approvals). Then save the bill again, the same day.

??? question "The cash counted does not match at the end of the day."
    Look at **Documents of the Day** on the [Day-End Closing](finance/day-end.md#day-end-closing): each
    document shows how it was paid. A payment recorded as cash but taken by UPI (or the other way) is the
    usual cause. Write the reason in **Remarks** before closing.

## Laboratory

??? question "A lab order shows 'Not billed' in red."
    Its tests are not on any bill. Click **Bill the Tests**: the cash bill opens with them.

??? question "A result is marked 'Critically high'."
    The value is past the critical limit set in [Normal Ranges](investigation/lab-settings.md#normal-ranges).
    It stays on the Home page until the report is verified. Inform the doctor at once.

??? question "The sample was clotted or not labelled."
    [Reject](investigation/laboratory.md#receive-samples) it with the reason. The tests go back to **To
    collect**, and a new sample is taken.

## WhatsApp and printing

??? question "Does the hospital need a WhatsApp Business account?"
    No. The **WhatsApp** button opens WhatsApp on the computer or phone you are using, with the patient's
    number and the message typed in; you press Send. There is no charge. The words are in
    [Message Templates](administration/settings.md#message-templates).

??? question "How do I send the report or bill itself as a PDF?"
    In the print window, **Share** sends the PDF from a phone or tablet. On a computer, **Print** and choose
    *Save as PDF*, then attach the file in WhatsApp.

??? question "The printed documents show the wrong hospital name or address."
    They come from [Hospital Details](administration/settings.md#hospital-details).

## Signing in

??? question "I forgot my password, or I am locked out."
    Ask the administrator: they set a new password (and **Unlock** after 5 wrong tries) in
    [Application Users](administration/users.md#application-users). You then choose your own at the next
    sign-in.

??? question "I cannot see a menu my colleague sees."
    Menus follow the **role**. The administrator changes it in
    [Roles](administration/users.md#roles) or on your user.
