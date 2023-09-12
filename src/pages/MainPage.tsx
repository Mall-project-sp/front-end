import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../components/ProductList/ProductList';
import Sidebar from '../components/Sidebar';
import Banner from '../components/Banner/Banner';
import styled from 'styled-components';
import { devices } from '../assets/styles/constants';
// import { setProducts, selectProducts } from '../store/testProductSlice';
// import { useQuery } from '@tanstack/react-query';
// import { fetchProducts } from '../api/index';

const MainPage: React.FC = () => {
	// const dispatch = useDispatch();
	// const selectedProducts = useSelector(selectProducts);
	// const { isLoading, data } = useQuery({
	// 	queryKey: ['testProducts'],
	// 	queryFn: fetchProducts,
	// 	staleTime: 3000,
	// 	cacheTime: 60 * 1000,
	// 	// onSuccess: fetchedData => {
	// 	// 	if (!isError) {
	// 	// 		dispatch(setProducts(fetchedData.products));
	// 	// 	}
	// 	// },
	// });
	const response = {
		status: 'success',
		message: '상품목록 조회가 완료되었습니다.',
		data: {
			categoryId: 1,
			categoryName: 'WOMEN',
			pagination: {
				totalPage: '5',
				totalCount: '20',
				currentPage: '1',
				isLastPage: false,
			},
			productList: [
				{
					id: 1,
					name: 'LMJ Gold Button Wrap One-piece_black',
					price: 21000,
					description: '가니송 시그니처 랩 원피스입니다.',
					discountRate: 10,
					isDiscount: true,
					isNew: true,
					deliveryPrice: '2500',
					saleStartDate: '2023-09-08T11:58:20.551705',
					saleEndDate: '2023-09-01T11:58:20.551705',
					imageUrl: 'https://women.jpg',
					imageType: 'thumbnail',
				},
				{
					id: 2,
					name: 'XORE Bolero Knit - Pink',
					price: 21000,
					description: '볼레로 스타일의 니트 가디건입니다.',
					discountRate: 10,
					isDiscount: true,
					isNew: false,
					deliveryPrice: '2500',
					saleStartDate: '2023-09-08T11:58:20.551705',
					saleEndDate: '2023-09-28T11:58:20.551705',
					imageUrl: 'https://clothes.jpg',
					imageType: 'thumbnail',
				},
				{
					id: 3,
					name: 'Luna Bag / BLACK',
					price: 158000,
					description: '외계인에서 디자인 영감을 받은 숄더백',
					discountRate: 0,
					isDiscount: true,
					isNew: false,
					deliveryPrice: '2500',
					saleStartDate: '2023-09-08T11:58:20.551705',
					saleEndDate: '2023-09-28T11:58:20.551705',
					imageUrl: 'https://bag.jpg',
					imageType: 'thumbnail',
				},
			],
		},
	};
	return (
		<>
			<PageContainer>
				{/* {isLoading && 'Loading...'} */}
				<BannerContainer>
					<Banner />
				</BannerContainer>
				<SidebarContainer>
					<Sidebar />
				</SidebarContainer>
				<ProductListContainer>
					<ProductList products={response.data.productList} />
				</ProductListContainer>
			</PageContainer>
		</>
	);
};

const PageContainer = styled.div`
	display: flex;
	flex: 5;
	box-sizing: content-box; /* 박스 모델을 content-box로 설정 */
	@media screen and (${devices.md}) {
		flex-direction: column;
	}
`;
const SidebarContainer = styled.div`
	flex: 1;
	margin: 100px 3rem 30px 3rem;
	@media screen and (${devices.md}) {
		background-color: #f2f2f2;
		margin: 0px;
	}
`;
const BannerContainer = styled.div`
	display: none; /* 기본적으로 숨김 */
	@media screen and (${devices.md}) {
		display: block; /* 모바일 화면일 때 보이도록 변경 */
		margin-top: 2rem;
		background-color: #f2f2f2;
		width: auto;
		height: auto;
	}
`;
const ProductListContainer = styled.div`
	flex: 4;
`;

export default MainPage;
