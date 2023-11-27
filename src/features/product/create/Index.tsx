'use client';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next-nprogress-bar';
import React, { useEffect } from 'react';
import FormCreateProduct from '../components/FormCreateProduct';
import { creatingProduct } from '@/redux/reducers/productReducer';
import { Product } from '@/models/productModels';

const CreateProductComponent = () => {
	const { product } = useAppSelector((state) => state);

	const dispatch = useAppDispatch();
	const router = useRouter();

	const onSubmit = (data: Product) => {
		dispatch(creatingProduct(data));
	};

	useEffect(() => {
		if (product.status === 'completed') {
			router.push('/product');
		}
	}, [product.status, router]);

	return (
		<div>
			<FormCreateProduct onSubmit={onSubmit} />
		</div>
	);
};

export default CreateProductComponent;