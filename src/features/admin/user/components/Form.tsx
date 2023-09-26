import MButton from '@/components/MButton';
import MCol from '@/components/MCol';
import MInput from '@/components/MInput';
import MRow from '@/components/MRow';
import MSpace from '@/components/MSpace';
import { User } from '@/models/userModel';
import { Form, Input } from 'antd';
import { usePathname } from 'next/navigation';
import React from 'react';

type UserFormProps = {
	onSubmit?: (data: User) => void;
};

const inititalValue: User = {
	username: '',
	password: '',
	name: '',
	email: '',
};

const UserForm: React.FC<UserFormProps> = (props) => {
	const { onSubmit } = props;
	const pathname = usePathname();

	return (
		<Form
			onFinish={onSubmit}
			layout='vertical'
			initialValues={inititalValue}
		>
			<MRow gutter={12}>
				<MCol span={6}>
					<Form.Item
						name='username'
						label='Username'
						rules={[{ required: true }]}
					>
						<MInput
							placeholder='Enter username...'
							size='large'
						/>
					</Form.Item>
				</MCol>
				<MCol span={6}>
					<Form.Item
						name='password'
						label='Password'
						rules={[{ required: true }]}
					>
						<Input.Password
							placeholder='Enter password...'
							autoComplete='new-password'
							size='large'
						/>
					</Form.Item>
				</MCol>
				<MCol span={6}>
					<Form.Item
						name='name'
						label='Name'
						rules={[{ required: true }]}
					>
						<MInput
							placeholder='Enter Name...'
							size='large'
						/>
					</Form.Item>
				</MCol>
				<MCol span={6}>
					<Form.Item
						name='email'
						label='Email'
						rules={[{ required: true }]}
					>
						<MInput
							placeholder='Enter Email...'
							size='large'
						/>
					</Form.Item>
				</MCol>
			</MRow>
			<MRow
				gutter={8}
				justify='end'
			>
				<MCol>
					<MButton
						type='primary'
						className='bg-gray-400'
						link='/admin/user'
					>
						Back
					</MButton>
				</MCol>
				<MCol>
					<MButton
						type='primary'
						htmlType='submit'
					>
						{pathname.includes('create') ? 'Create' : 'Update'}
					</MButton>
				</MCol>
			</MRow>
		</Form>
	);
};

export default UserForm;
