'use client';

import { useState } from 'react';

import ModalClose from '../modal/ModalClose';
import Input from '../input/Input';
import FormField from '../formField/FormField';
import Select from '../select/Select';
import Textarea from '../textarea/Textarea';

import { FormState } from '@/types/index.type';
import { TransferFormProps } from '@/types/transfer.form.type';

import './TransferForm.scss';

type FormError = Partial<FormState>;

const INITIAL_STATE = {
  amount: '',
  accountNumber: '',
  bank: '',
  description: '',
};

const TransferForm = ({ status, setStatus, onSuccess }: TransferFormProps) => {
  const [errors, setErrors] = useState<FormError>({});
  const [form, setForm] = useState<FormState>(INITIAL_STATE);

  const handleChange = ({
    target: input,
  }: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >) => {
    const { name, value } = input;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = (): FormError => {
    const newErrors: FormError = {};

    if (!form.amount || Number(form.amount) <= 0) {
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

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus('loading');

    await new Promise((res) => setTimeout(res, 1200));
    onSuccess(form);
    console.log('Transfer simulated:', form);
  };

  return (
    <form onSubmit={handleSubmit} id='transfer-form' className='transfer-form'>
      <FormField id='amount' label='Amount' error={errors.amount}>
        <Input
          id='amount'
          name='amount'
          type='number'
          value={form.amount}
          placeholder='₦ 0.00'
          onChange={handleChange}
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
        <Select id='name' name='bank' value={form.bank} onChange={handleChange}>
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
        />
      </FormField>

      <div className='transfer-form__actions'>
        <ModalClose>Cancel</ModalClose>

        <button
          type='submit'
          form='transfer-form'
          className='transfer-form__actions--btn'
        >
          {status === 'loading' ? 'Processing...' : 'Confirm transfer'}
        </button>
      </div>
    </form>
  );
};

export default TransferForm;
