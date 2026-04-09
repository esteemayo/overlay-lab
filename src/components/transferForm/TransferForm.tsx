'use client';

import { useRef, useState } from 'react';

import Button from '../button/Button';
import Popup from '../popup';
import Textarea from '../textarea/Textarea';
import Input from '../input/Input';
import FormField from '../formField/FormField';
import Select from '../select/Select';
import ConfirmTransferModal from '../ConfirmTransferModal';

import { useTransfer } from '@/hooks/useTransfer';
import { formatCurrency } from '@/utils/formatCurrency';

import { FormState } from '@/types';
import { TransferFormProps } from '@/types/transferForm';

import './TransferForm.scss';

type FormError = Partial<FormState>;

const INITIAL_STATE = {
  amount: '',
  accountNumber: '',
  bank: '',
  description: '',
};

const TransferForm = ({ status, onSuccess }: TransferFormProps) => {
  const { dispatch } = useTransfer();

  const formErrorRef = useRef<HTMLDivElement | null>(null)

  const [errors, setErrors] = useState<FormError>({});
  const [amountRaw, setAmountRaw] = useState('');
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = ({
    target: input,
  }: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >) => {
    const { name, value } = input;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleAmountChange = ({
    target: input,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = input;
    const digitOnly = value.replace(/\D/g, '');

    setAmountRaw(digitOnly);
    setErrors((prev) => ({ ...prev, amount: '' }));
  };

  const validate = (): FormError => {
    const newErrors: FormError = {};

    if (!amountRaw || Number(amountRaw) <= 0) {
      newErrors.amount = 'Enter a valid amount';
    }

    if (form.accountNumber.length !== 10) {
      newErrors.accountNumber = 'Account number must be 10 digits';
    }

    if (!form.bank) {
      newErrors.bank = 'Select a bank';
    }

    return newErrors;
  };

  const handleSubmit = async (e?: React.SubmitEvent<HTMLFormElement>) => {
    e?.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      formErrorRef.current?.focus();
      return;
    }
  };

  const handleConfirm = async () => {
    dispatch({ type: 'TRANSFER_START' });

    const payload = {
      ...form,
      amount: Number(amountRaw) / 100,
    };

    await new Promise((res) => setTimeout(res, 1200));

    console.log('Transfer executed', payload);

    onSuccess(payload);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  const displayValue = isFocused ? amountRaw : formatCurrency(amountRaw);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id='transfer-form'
        className='transfer-form'
        noValidate
        aria-describedby='transfom-form-errors'
      >
        <div
          ref={formErrorRef}
          id='transfom-form-errors'
          className='visually-hidden'
          tabIndex={-1}
          role='alert'
          aria-live='assertive'
        >
          {Object.keys(errors).length > 0 && 'Please correct the highlighted form errors.'}
        </div>

        <FormField id='amount' label='Amount' error={errors.amount}>
          <Input
            id='amount'
            name='amount'
            inputMode='numeric'
            autoComplete='off'
            value={displayValue}
            onChange={handleAmountChange}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            placeholder='₦0.00'
          />
        </FormField>

        <FormField
          id='accountNumber'
          label='Account Number'
          error={errors.accountNumber}
        >
          <Input
            id='accountNumber'
            name='accountNumber'
            type='number'
            value={form.accountNumber}
            placeholder='0123456789'
            maxLength={10}
            onChange={handleChange}
          />
        </FormField>

        <FormField id='bank' label='Bank' error={errors.bank}>
          <Select
            id='name'
            name='bank'
            value={form.bank}
            onChange={handleChange}
          >
            <option value=''>Select Bank</option>
            <option value='gtb'>GTBank</option>
            <option value='access'>Access Bank</option>
            <option value='uba'>UBA</option>
          </Select>
        </FormField>

        <FormField
          id='description'
          label='Description (Optional)'
          error={errors.description}
        >
          <Textarea
            id='description'
            name='description'
            rows={3}
            value={form.description}
            placeholder='Payment for...'
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </FormField>

        <Popup>
          <div
            className='transfer-form__actions'
            role='group'
            aria-label='Transfer form actions'
          >
            <Popup.Close asChild>
              <Button label='Cancel' variant='cancel' />
            </Popup.Close>

            <Popup.Trigger asChild>
              <Button type='submit' label='Confirm transfer' variant='submit' />
            </Popup.Trigger>
          </div>

          <Popup.Content>
            <ConfirmTransferModal
              data={{ ...form, amount: amountRaw }}
              status={status}
              onConfirm={handleConfirm}
            />
          </Popup.Content>
        </Popup>
      </form>
    </>
  );
};

export default TransferForm;
