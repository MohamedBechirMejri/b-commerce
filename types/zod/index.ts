import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const BrandScalarFieldEnumSchema = z.enum(['id','name','createdAt','updatedAt']);

export const CategoryScalarFieldEnumSchema = z.enum(['id','name','createdAt','updatedAt']);

export const AuthorScalarFieldEnumSchema = z.enum(['id','name','email','password','createdAt','updatedAt']);

export const ProductScalarFieldEnumSchema = z.enum(['id','name','description','reference','createdAt','updatedAt','isPublished','images','tags','price','salePrice','onSale','stock','restockAlert','minBuy','maxBuy','brandId','authorId']);

export const OrderScalarFieldEnumSchema = z.enum(['id','status','createdAt','updatedAt','productId']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullsOrderSchema = z.enum(['first','last']);

export const OrderStatusSchema = z.enum(['PLACED','CONFIRMED','PENDING','COMPLETED','CANCELLED']);

export type OrderStatusType = `${z.infer<typeof OrderStatusSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// BRAND SCHEMA
/////////////////////////////////////////

export const BrandSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Brand = z.infer<typeof BrandSchema>

/////////////////////////////////////////
// CATEGORY SCHEMA
/////////////////////////////////////////

export const CategorySchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Category = z.infer<typeof CategorySchema>

/////////////////////////////////////////
// AUTHOR SCHEMA
/////////////////////////////////////////

export const AuthorSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Author = z.infer<typeof AuthorSchema>

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  description: z.string(),
  reference: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  isPublished: z.boolean(),
  images: z.string(),
  tags: z.string(),
  price: z.number(),
  salePrice: z.number().nullable(),
  onSale: z.boolean(),
  stock: z.number().int(),
  restockAlert: z.number().int().nullable(),
  minBuy: z.number().int(),
  maxBuy: z.number().int(),
  brandId: z.string().nullable(),
  authorId: z.string().nullable(),
})

export type Product = z.infer<typeof ProductSchema>

/////////////////////////////////////////
// ORDER SCHEMA
/////////////////////////////////////////

export const OrderSchema = z.object({
  status: OrderStatusSchema,
  id: z.string().cuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  productId: z.string(),
})

export type Order = z.infer<typeof OrderSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// BRAND
//------------------------------------------------------

export const BrandIncludeSchema: z.ZodType<Prisma.BrandInclude> = z.object({
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BrandCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BrandArgsSchema: z.ZodType<Prisma.BrandArgs> = z.object({
  select: z.lazy(() => BrandSelectSchema).optional(),
  include: z.lazy(() => BrandIncludeSchema).optional(),
}).strict();

export const BrandCountOutputTypeArgsSchema: z.ZodType<Prisma.BrandCountOutputTypeArgs> = z.object({
  select: z.lazy(() => BrandCountOutputTypeSelectSchema).nullish(),
}).strict();

export const BrandCountOutputTypeSelectSchema: z.ZodType<Prisma.BrandCountOutputTypeSelect> = z.object({
  products: z.boolean().optional(),
}).strict();

export const BrandSelectSchema: z.ZodType<Prisma.BrandSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BrandCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CATEGORY
//------------------------------------------------------

export const CategoryIncludeSchema: z.ZodType<Prisma.CategoryInclude> = z.object({
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CategoryArgsSchema: z.ZodType<Prisma.CategoryArgs> = z.object({
  select: z.lazy(() => CategorySelectSchema).optional(),
  include: z.lazy(() => CategoryIncludeSchema).optional(),
}).strict();

export const CategoryCountOutputTypeArgsSchema: z.ZodType<Prisma.CategoryCountOutputTypeArgs> = z.object({
  select: z.lazy(() => CategoryCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.CategoryCountOutputTypeSelect> = z.object({
  products: z.boolean().optional(),
}).strict();

export const CategorySelectSchema: z.ZodType<Prisma.CategorySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

// AUTHOR
//------------------------------------------------------

export const AuthorIncludeSchema: z.ZodType<Prisma.AuthorInclude> = z.object({
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AuthorCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const AuthorArgsSchema: z.ZodType<Prisma.AuthorArgs> = z.object({
  select: z.lazy(() => AuthorSelectSchema).optional(),
  include: z.lazy(() => AuthorIncludeSchema).optional(),
}).strict();

export const AuthorCountOutputTypeArgsSchema: z.ZodType<Prisma.AuthorCountOutputTypeArgs> = z.object({
  select: z.lazy(() => AuthorCountOutputTypeSelectSchema).nullish(),
}).strict();

export const AuthorCountOutputTypeSelectSchema: z.ZodType<Prisma.AuthorCountOutputTypeSelect> = z.object({
  products: z.boolean().optional(),
}).strict();

export const AuthorSelectSchema: z.ZodType<Prisma.AuthorSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AuthorCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PRODUCT
//------------------------------------------------------

export const ProductIncludeSchema: z.ZodType<Prisma.ProductInclude> = z.object({
  brand: z.union([z.boolean(),z.lazy(() => BrandArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => CategoryFindManyArgsSchema)]).optional(),
  author: z.union([z.boolean(),z.lazy(() => AuthorArgsSchema)]).optional(),
  Order: z.union([z.boolean(),z.lazy(() => OrderFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ProductArgsSchema: z.ZodType<Prisma.ProductArgs> = z.object({
  select: z.lazy(() => ProductSelectSchema).optional(),
  include: z.lazy(() => ProductIncludeSchema).optional(),
}).strict();

export const ProductCountOutputTypeArgsSchema: z.ZodType<Prisma.ProductCountOutputTypeArgs> = z.object({
  select: z.lazy(() => ProductCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ProductCountOutputTypeSelectSchema: z.ZodType<Prisma.ProductCountOutputTypeSelect> = z.object({
  categories: z.boolean().optional(),
  Order: z.boolean().optional(),
}).strict();

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  reference: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  isPublished: z.boolean().optional(),
  images: z.boolean().optional(),
  tags: z.boolean().optional(),
  price: z.boolean().optional(),
  salePrice: z.boolean().optional(),
  onSale: z.boolean().optional(),
  stock: z.boolean().optional(),
  restockAlert: z.boolean().optional(),
  minBuy: z.boolean().optional(),
  maxBuy: z.boolean().optional(),
  brandId: z.boolean().optional(),
  authorId: z.boolean().optional(),
  brand: z.union([z.boolean(),z.lazy(() => BrandArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => CategoryFindManyArgsSchema)]).optional(),
  author: z.union([z.boolean(),z.lazy(() => AuthorArgsSchema)]).optional(),
  Order: z.union([z.boolean(),z.lazy(() => OrderFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ORDER
//------------------------------------------------------

export const OrderIncludeSchema: z.ZodType<Prisma.OrderInclude> = z.object({
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict()

export const OrderArgsSchema: z.ZodType<Prisma.OrderArgs> = z.object({
  select: z.lazy(() => OrderSelectSchema).optional(),
  include: z.lazy(() => OrderIncludeSchema).optional(),
}).strict();

export const OrderSelectSchema: z.ZodType<Prisma.OrderSelect> = z.object({
  id: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  productId: z.boolean().optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const BrandWhereInputSchema: z.ZodType<Prisma.BrandWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BrandWhereInputSchema),z.lazy(() => BrandWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BrandWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BrandWhereInputSchema),z.lazy(() => BrandWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict();

export const BrandOrderByWithRelationInputSchema: z.ZodType<Prisma.BrandOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  products: z.lazy(() => ProductOrderByRelationAggregateInputSchema).optional()
}).strict();

export const BrandWhereUniqueInputSchema: z.ZodType<Prisma.BrandWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => BrandWhereInputSchema),z.lazy(() => BrandWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BrandWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BrandWhereInputSchema),z.lazy(() => BrandWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict());

export const BrandOrderByWithAggregationInputSchema: z.ZodType<Prisma.BrandOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BrandCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BrandMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BrandMinOrderByAggregateInputSchema).optional()
}).strict();

export const BrandScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BrandScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BrandScalarWhereWithAggregatesInputSchema),z.lazy(() => BrandScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BrandScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BrandScalarWhereWithAggregatesInputSchema),z.lazy(() => BrandScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CategoryWhereInputSchema: z.ZodType<Prisma.CategoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict();

export const CategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.CategoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  products: z.lazy(() => ProductOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CategoryWhereUniqueInputSchema: z.ZodType<Prisma.CategoryWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict());

export const CategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.CategoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CategoryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CategoryMinOrderByAggregateInputSchema).optional()
}).strict();

export const CategoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CategoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AuthorWhereInputSchema: z.ZodType<Prisma.AuthorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AuthorWhereInputSchema),z.lazy(() => AuthorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthorWhereInputSchema),z.lazy(() => AuthorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict();

export const AuthorOrderByWithRelationInputSchema: z.ZodType<Prisma.AuthorOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  products: z.lazy(() => ProductOrderByRelationAggregateInputSchema).optional()
}).strict();

export const AuthorWhereUniqueInputSchema: z.ZodType<Prisma.AuthorWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    email: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => AuthorWhereInputSchema),z.lazy(() => AuthorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthorWhereInputSchema),z.lazy(() => AuthorWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict());

export const AuthorOrderByWithAggregationInputSchema: z.ZodType<Prisma.AuthorOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AuthorCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AuthorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AuthorMinOrderByAggregateInputSchema).optional()
}).strict();

export const AuthorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AuthorScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AuthorScalarWhereWithAggregatesInputSchema),z.lazy(() => AuthorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthorScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthorScalarWhereWithAggregatesInputSchema),z.lazy(() => AuthorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ProductWhereInputSchema: z.ZodType<Prisma.ProductWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  reference: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  isPublished: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  images: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tags: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  salePrice: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  onSale: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  stock: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  restockAlert: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  minBuy: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  maxBuy: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  brandId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  authorId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  brand: z.union([ z.lazy(() => BrandNullableRelationFilterSchema),z.lazy(() => BrandWhereInputSchema) ]).optional().nullable(),
  categories: z.lazy(() => CategoryListRelationFilterSchema).optional(),
  author: z.union([ z.lazy(() => AuthorNullableRelationFilterSchema),z.lazy(() => AuthorWhereInputSchema) ]).optional().nullable(),
  Order: z.lazy(() => OrderListRelationFilterSchema).optional()
}).strict();

export const ProductOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  reference: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  isPublished: z.lazy(() => SortOrderSchema).optional(),
  images: z.lazy(() => SortOrderSchema).optional(),
  tags: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  salePrice: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  onSale: z.lazy(() => SortOrderSchema).optional(),
  stock: z.lazy(() => SortOrderSchema).optional(),
  restockAlert: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  minBuy: z.lazy(() => SortOrderSchema).optional(),
  maxBuy: z.lazy(() => SortOrderSchema).optional(),
  brandId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  authorId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  brand: z.lazy(() => BrandOrderByWithRelationInputSchema).optional(),
  categories: z.lazy(() => CategoryOrderByRelationAggregateInputSchema).optional(),
  author: z.lazy(() => AuthorOrderByWithRelationInputSchema).optional(),
  Order: z.lazy(() => OrderOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ProductWhereUniqueInputSchema: z.ZodType<Prisma.ProductWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    reference: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    reference: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  reference: z.string().optional(),
  AND: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  isPublished: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  images: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tags: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  salePrice: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  onSale: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  stock: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  restockAlert: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  minBuy: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  maxBuy: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  brandId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  authorId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  brand: z.union([ z.lazy(() => BrandNullableRelationFilterSchema),z.lazy(() => BrandWhereInputSchema) ]).optional().nullable(),
  categories: z.lazy(() => CategoryListRelationFilterSchema).optional(),
  author: z.union([ z.lazy(() => AuthorNullableRelationFilterSchema),z.lazy(() => AuthorWhereInputSchema) ]).optional().nullable(),
  Order: z.lazy(() => OrderListRelationFilterSchema).optional()
}).strict());

export const ProductOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  reference: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  isPublished: z.lazy(() => SortOrderSchema).optional(),
  images: z.lazy(() => SortOrderSchema).optional(),
  tags: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  salePrice: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  onSale: z.lazy(() => SortOrderSchema).optional(),
  stock: z.lazy(() => SortOrderSchema).optional(),
  restockAlert: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  minBuy: z.lazy(() => SortOrderSchema).optional(),
  maxBuy: z.lazy(() => SortOrderSchema).optional(),
  brandId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  authorId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => ProductCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProductAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProductMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProductMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProductSumOrderByAggregateInputSchema).optional()
}).strict();

export const ProductScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  reference: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  isPublished: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  images: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tags: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  salePrice: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  onSale: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  stock: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  restockAlert: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  minBuy: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  maxBuy: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  brandId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  authorId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const OrderWhereInputSchema: z.ZodType<Prisma.OrderWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumOrderStatusFilterSchema),z.lazy(() => OrderStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  productId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  product: z.union([ z.lazy(() => ProductRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional(),
}).strict();

export const OrderOrderByWithRelationInputSchema: z.ZodType<Prisma.OrderOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputSchema).optional()
}).strict();

export const OrderWhereUniqueInputSchema: z.ZodType<Prisma.OrderWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  status: z.union([ z.lazy(() => EnumOrderStatusFilterSchema),z.lazy(() => OrderStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  productId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  product: z.union([ z.lazy(() => ProductRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional(),
}).strict());

export const OrderOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrderOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OrderCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OrderMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OrderMinOrderByAggregateInputSchema).optional()
}).strict();

export const OrderScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OrderScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => OrderScalarWhereWithAggregatesInputSchema),z.lazy(() => OrderScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderScalarWhereWithAggregatesInputSchema),z.lazy(() => OrderScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumOrderStatusWithAggregatesFilterSchema),z.lazy(() => OrderStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  productId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const BrandCreateInputSchema: z.ZodType<Prisma.BrandCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductCreateNestedManyWithoutBrandInputSchema).optional()
}).strict();

export const BrandUncheckedCreateInputSchema: z.ZodType<Prisma.BrandUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutBrandInputSchema).optional()
}).strict();

export const BrandUpdateInputSchema: z.ZodType<Prisma.BrandUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutBrandNestedInputSchema).optional()
}).strict();

export const BrandUncheckedUpdateInputSchema: z.ZodType<Prisma.BrandUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutBrandNestedInputSchema).optional()
}).strict();

export const BrandCreateManyInputSchema: z.ZodType<Prisma.BrandCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BrandUpdateManyMutationInputSchema: z.ZodType<Prisma.BrandUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BrandUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BrandUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryCreateInputSchema: z.ZodType<Prisma.CategoryCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductCreateNestedManyWithoutCategoriesInputSchema).optional()
}).strict();

export const CategoryUncheckedCreateInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutCategoriesInputSchema).optional()
}).strict();

export const CategoryUpdateInputSchema: z.ZodType<Prisma.CategoryUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutCategoriesNestedInputSchema).optional()
}).strict();

export const CategoryUncheckedUpdateInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutCategoriesNestedInputSchema).optional()
}).strict();

export const CategoryCreateManyInputSchema: z.ZodType<Prisma.CategoryCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CategoryUpdateManyMutationInputSchema: z.ZodType<Prisma.CategoryUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuthorCreateInputSchema: z.ZodType<Prisma.AuthorCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const AuthorUncheckedCreateInputSchema: z.ZodType<Prisma.AuthorUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const AuthorUpdateInputSchema: z.ZodType<Prisma.AuthorUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const AuthorUncheckedUpdateInputSchema: z.ZodType<Prisma.AuthorUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const AuthorCreateManyInputSchema: z.ZodType<Prisma.AuthorCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AuthorUpdateManyMutationInputSchema: z.ZodType<Prisma.AuthorUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuthorUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AuthorUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductCreateInputSchema: z.ZodType<Prisma.ProductCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string(),
  reference: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isPublished: z.boolean().optional(),
  images: z.string(),
  tags: z.string(),
  price: z.number(),
  salePrice: z.number().optional().nullable(),
  onSale: z.boolean().optional(),
  stock: z.number().int().optional(),
  restockAlert: z.number().int().optional().nullable(),
  minBuy: z.number().int().optional(),
  maxBuy: z.number().int().optional(),
  brand: z.lazy(() => BrandCreateNestedOneWithoutProductsInputSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutProductsInputSchema).optional(),
  author: z.lazy(() => AuthorCreateNestedOneWithoutProductsInputSchema).optional(),
  Order: z.lazy(() => OrderCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateInputSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string(),
  reference: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isPublished: z.boolean().optional(),
  images: z.string(),
  tags: z.string(),
  price: z.number(),
  salePrice: z.number().optional().nullable(),
  onSale: z.boolean().optional(),
  stock: z.number().int().optional(),
  restockAlert: z.number().int().optional().nullable(),
  minBuy: z.number().int().optional(),
  maxBuy: z.number().int().optional(),
  brandId: z.string().optional().nullable(),
  authorId: z.string().optional().nullable(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  Order: z.lazy(() => OrderUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUpdateInputSchema: z.ZodType<Prisma.ProductUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  salePrice: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  onSale: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  restockAlert: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  minBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  maxBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brand: z.lazy(() => BrandUpdateOneWithoutProductsNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutProductsNestedInputSchema).optional(),
  author: z.lazy(() => AuthorUpdateOneWithoutProductsNestedInputSchema).optional(),
  Order: z.lazy(() => OrderUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  salePrice: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  onSale: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  restockAlert: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  minBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  maxBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  authorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  Order: z.lazy(() => OrderUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductCreateManyInputSchema: z.ZodType<Prisma.ProductCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string(),
  reference: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isPublished: z.boolean().optional(),
  images: z.string(),
  tags: z.string(),
  price: z.number(),
  salePrice: z.number().optional().nullable(),
  onSale: z.boolean().optional(),
  stock: z.number().int().optional(),
  restockAlert: z.number().int().optional().nullable(),
  minBuy: z.number().int().optional(),
  maxBuy: z.number().int().optional(),
  brandId: z.string().optional().nullable(),
  authorId: z.string().optional().nullable()
}).strict();

export const ProductUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  salePrice: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  onSale: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  restockAlert: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  minBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  maxBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  salePrice: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  onSale: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  restockAlert: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  minBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  maxBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  authorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const OrderCreateInputSchema: z.ZodType<Prisma.OrderCreateInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => OrderStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutOrderInputSchema)
}).strict();

export const OrderUncheckedCreateInputSchema: z.ZodType<Prisma.OrderUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => OrderStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  productId: z.string()
}).strict();

export const OrderUpdateInputSchema: z.ZodType<Prisma.OrderUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutOrderNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderCreateManyInputSchema: z.ZodType<Prisma.OrderCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => OrderStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  productId: z.string()
}).strict();

export const OrderUpdateManyMutationInputSchema: z.ZodType<Prisma.OrderUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  contains: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  startsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  endsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const ProductListRelationFilterSchema: z.ZodType<Prisma.ProductListRelationFilter> = z.object({
  every: z.lazy(() => ProductWhereInputSchema).optional(),
  some: z.lazy(() => ProductWhereInputSchema).optional(),
  none: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export const ProductOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BrandCountOrderByAggregateInputSchema: z.ZodType<Prisma.BrandCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BrandMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BrandMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BrandMinOrderByAggregateInputSchema: z.ZodType<Prisma.BrandMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  contains: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  startsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  endsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const CategoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthorCountOrderByAggregateInputSchema: z.ZodType<Prisma.AuthorCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthorMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AuthorMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthorMinOrderByAggregateInputSchema: z.ZodType<Prisma.AuthorMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.union([ z.boolean(),z.lazy(() => BooleanFieldRefInputSchema) ]).optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z.object({
  equals: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const FloatNullableFilterSchema: z.ZodType<Prisma.FloatNullableFilter> = z.object({
  equals: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  contains: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  startsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  endsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const BrandNullableRelationFilterSchema: z.ZodType<Prisma.BrandNullableRelationFilter> = z.object({
  is: z.lazy(() => BrandWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => BrandWhereInputSchema).optional().nullable()
}).strict();

export const CategoryListRelationFilterSchema: z.ZodType<Prisma.CategoryListRelationFilter> = z.object({
  every: z.lazy(() => CategoryWhereInputSchema).optional(),
  some: z.lazy(() => CategoryWhereInputSchema).optional(),
  none: z.lazy(() => CategoryWhereInputSchema).optional()
}).strict();

export const AuthorNullableRelationFilterSchema: z.ZodType<Prisma.AuthorNullableRelationFilter> = z.object({
  is: z.lazy(() => AuthorWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => AuthorWhereInputSchema).optional().nullable()
}).strict();

export const OrderListRelationFilterSchema: z.ZodType<Prisma.OrderListRelationFilter> = z.object({
  every: z.lazy(() => OrderWhereInputSchema).optional(),
  some: z.lazy(() => OrderWhereInputSchema).optional(),
  none: z.lazy(() => OrderWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const CategoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CategoryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OrderOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  reference: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  isPublished: z.lazy(() => SortOrderSchema).optional(),
  images: z.lazy(() => SortOrderSchema).optional(),
  tags: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  salePrice: z.lazy(() => SortOrderSchema).optional(),
  onSale: z.lazy(() => SortOrderSchema).optional(),
  stock: z.lazy(() => SortOrderSchema).optional(),
  restockAlert: z.lazy(() => SortOrderSchema).optional(),
  minBuy: z.lazy(() => SortOrderSchema).optional(),
  maxBuy: z.lazy(() => SortOrderSchema).optional(),
  brandId: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProductAvgOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional(),
  salePrice: z.lazy(() => SortOrderSchema).optional(),
  stock: z.lazy(() => SortOrderSchema).optional(),
  restockAlert: z.lazy(() => SortOrderSchema).optional(),
  minBuy: z.lazy(() => SortOrderSchema).optional(),
  maxBuy: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  reference: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  isPublished: z.lazy(() => SortOrderSchema).optional(),
  images: z.lazy(() => SortOrderSchema).optional(),
  tags: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  salePrice: z.lazy(() => SortOrderSchema).optional(),
  onSale: z.lazy(() => SortOrderSchema).optional(),
  stock: z.lazy(() => SortOrderSchema).optional(),
  restockAlert: z.lazy(() => SortOrderSchema).optional(),
  minBuy: z.lazy(() => SortOrderSchema).optional(),
  maxBuy: z.lazy(() => SortOrderSchema).optional(),
  brandId: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  reference: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  isPublished: z.lazy(() => SortOrderSchema).optional(),
  images: z.lazy(() => SortOrderSchema).optional(),
  tags: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  salePrice: z.lazy(() => SortOrderSchema).optional(),
  onSale: z.lazy(() => SortOrderSchema).optional(),
  stock: z.lazy(() => SortOrderSchema).optional(),
  restockAlert: z.lazy(() => SortOrderSchema).optional(),
  minBuy: z.lazy(() => SortOrderSchema).optional(),
  maxBuy: z.lazy(() => SortOrderSchema).optional(),
  brandId: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProductSumOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional(),
  salePrice: z.lazy(() => SortOrderSchema).optional(),
  stock: z.lazy(() => SortOrderSchema).optional(),
  restockAlert: z.lazy(() => SortOrderSchema).optional(),
  minBuy: z.lazy(() => SortOrderSchema).optional(),
  maxBuy: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.union([ z.boolean(),z.lazy(() => BooleanFieldRefInputSchema) ]).optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = z.object({
  equals: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const FloatNullableWithAggregatesFilterSchema: z.ZodType<Prisma.FloatNullableWithAggregatesFilter> = z.object({
  equals: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatNullableFilterSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  contains: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  startsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  endsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const EnumOrderStatusFilterSchema: z.ZodType<Prisma.EnumOrderStatusFilter> = z.object({
  equals: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldRefInputSchema) ]).optional(),
  in: z.lazy(() => OrderStatusSchema).array().optional(),
  notIn: z.lazy(() => OrderStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => NestedEnumOrderStatusFilterSchema) ]).optional(),
}).strict();

export const ProductRelationFilterSchema: z.ZodType<Prisma.ProductRelationFilter> = z.object({
  is: z.lazy(() => ProductWhereInputSchema).optional(),
  isNot: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export const OrderCountOrderByAggregateInputSchema: z.ZodType<Prisma.OrderCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OrderMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderMinOrderByAggregateInputSchema: z.ZodType<Prisma.OrderMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumOrderStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumOrderStatusWithAggregatesFilter> = z.object({
  equals: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldRefInputSchema) ]).optional(),
  in: z.lazy(() => OrderStatusSchema).array().optional(),
  notIn: z.lazy(() => OrderStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => NestedEnumOrderStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumOrderStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumOrderStatusFilterSchema).optional()
}).strict();

export const ProductCreateNestedManyWithoutBrandInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutBrandInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutBrandInputSchema),z.lazy(() => ProductCreateWithoutBrandInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema),z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutBrandInputSchema),z.lazy(() => ProductCreateOrConnectWithoutBrandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyBrandInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedCreateNestedManyWithoutBrandInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutBrandInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutBrandInputSchema),z.lazy(() => ProductCreateWithoutBrandInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema),z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutBrandInputSchema),z.lazy(() => ProductCreateOrConnectWithoutBrandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyBrandInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const ProductUpdateManyWithoutBrandNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutBrandNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutBrandInputSchema),z.lazy(() => ProductCreateWithoutBrandInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema),z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutBrandInputSchema),z.lazy(() => ProductCreateOrConnectWithoutBrandInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutBrandInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutBrandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyBrandInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutBrandInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutBrandInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutBrandInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutBrandInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyWithoutBrandNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutBrandNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutBrandInputSchema),z.lazy(() => ProductCreateWithoutBrandInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema),z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutBrandInputSchema),z.lazy(() => ProductCreateOrConnectWithoutBrandInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutBrandInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutBrandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyBrandInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutBrandInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutBrandInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutBrandInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutBrandInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductCreateNestedManyWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutCategoriesInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoriesInputSchema),z.lazy(() => ProductCreateWithoutCategoriesInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedCreateNestedManyWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutCategoriesInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoriesInputSchema),z.lazy(() => ProductCreateWithoutCategoriesInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUpdateManyWithoutCategoriesNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutCategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoriesInputSchema),z.lazy(() => ProductCreateWithoutCategoriesInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutCategoriesInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutCategoriesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutCategoriesInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutCategoriesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutCategoriesInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutCategoriesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyWithoutCategoriesNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutCategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoriesInputSchema),z.lazy(() => ProductCreateWithoutCategoriesInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutCategoriesInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutCategoriesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutCategoriesInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutCategoriesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutCategoriesInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutCategoriesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutAuthorInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutAuthorInputSchema),z.lazy(() => ProductCreateWithoutAuthorInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => ProductUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => ProductCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyAuthorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutAuthorInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutAuthorInputSchema),z.lazy(() => ProductCreateWithoutAuthorInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => ProductUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => ProductCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyAuthorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutAuthorInputSchema),z.lazy(() => ProductCreateWithoutAuthorInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => ProductUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => ProductCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyAuthorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutAuthorInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutAuthorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutAuthorInputSchema),z.lazy(() => ProductCreateWithoutAuthorInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => ProductUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => ProductCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyAuthorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutAuthorInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutAuthorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BrandCreateNestedOneWithoutProductsInputSchema: z.ZodType<Prisma.BrandCreateNestedOneWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => BrandCreateWithoutProductsInputSchema),z.lazy(() => BrandUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BrandCreateOrConnectWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => BrandWhereUniqueInputSchema).optional()
}).strict();

export const CategoryCreateNestedManyWithoutProductsInputSchema: z.ZodType<Prisma.CategoryCreateNestedManyWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutProductsInputSchema),z.lazy(() => CategoryCreateWithoutProductsInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AuthorCreateNestedOneWithoutProductsInputSchema: z.ZodType<Prisma.AuthorCreateNestedOneWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => AuthorCreateWithoutProductsInputSchema),z.lazy(() => AuthorUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AuthorCreateOrConnectWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => AuthorWhereUniqueInputSchema).optional()
}).strict();

export const OrderCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.OrderCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutProductInputSchema),z.lazy(() => OrderCreateWithoutProductInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutProductInputSchema),z.lazy(() => OrderUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutProductInputSchema),z.lazy(() => OrderCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CategoryUncheckedCreateNestedManyWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateNestedManyWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutProductsInputSchema),z.lazy(() => CategoryCreateWithoutProductsInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrderUncheckedCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.OrderUncheckedCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutProductInputSchema),z.lazy(() => OrderCreateWithoutProductInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutProductInputSchema),z.lazy(() => OrderUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutProductInputSchema),z.lazy(() => OrderCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NullableFloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableFloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const BrandUpdateOneWithoutProductsNestedInputSchema: z.ZodType<Prisma.BrandUpdateOneWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BrandCreateWithoutProductsInputSchema),z.lazy(() => BrandUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BrandCreateOrConnectWithoutProductsInputSchema).optional(),
  upsert: z.lazy(() => BrandUpsertWithoutProductsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => BrandWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BrandWhereInputSchema) ]).optional(),
  connect: z.lazy(() => BrandWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BrandUpdateToOneWithWhereWithoutProductsInputSchema),z.lazy(() => BrandUpdateWithoutProductsInputSchema),z.lazy(() => BrandUncheckedUpdateWithoutProductsInputSchema) ]).optional(),
}).strict();

export const CategoryUpdateManyWithoutProductsNestedInputSchema: z.ZodType<Prisma.CategoryUpdateManyWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutProductsInputSchema),z.lazy(() => CategoryCreateWithoutProductsInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoryUpsertWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => CategoryUpsertWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => CategoryUpdateWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoryUpdateManyWithWhereWithoutProductsInputSchema),z.lazy(() => CategoryUpdateManyWithWhereWithoutProductsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AuthorUpdateOneWithoutProductsNestedInputSchema: z.ZodType<Prisma.AuthorUpdateOneWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => AuthorCreateWithoutProductsInputSchema),z.lazy(() => AuthorUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AuthorCreateOrConnectWithoutProductsInputSchema).optional(),
  upsert: z.lazy(() => AuthorUpsertWithoutProductsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => AuthorWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => AuthorWhereInputSchema) ]).optional(),
  connect: z.lazy(() => AuthorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AuthorUpdateToOneWithWhereWithoutProductsInputSchema),z.lazy(() => AuthorUpdateWithoutProductsInputSchema),z.lazy(() => AuthorUncheckedUpdateWithoutProductsInputSchema) ]).optional(),
}).strict();

export const OrderUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.OrderUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutProductInputSchema),z.lazy(() => OrderCreateWithoutProductInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutProductInputSchema),z.lazy(() => OrderUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutProductInputSchema),z.lazy(() => OrderCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutProductInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutProductInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutProductInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const CategoryUncheckedUpdateManyWithoutProductsNestedInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateManyWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutProductsInputSchema),z.lazy(() => CategoryCreateWithoutProductsInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoryUpsertWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => CategoryUpsertWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => CategoryUpdateWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoryUpdateManyWithWhereWithoutProductsInputSchema),z.lazy(() => CategoryUpdateManyWithWhereWithoutProductsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrderUncheckedUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutProductInputSchema),z.lazy(() => OrderCreateWithoutProductInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutProductInputSchema),z.lazy(() => OrderUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutProductInputSchema),z.lazy(() => OrderCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutProductInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutProductInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutProductInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductCreateNestedOneWithoutOrderInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutOrderInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutOrderInputSchema),z.lazy(() => ProductUncheckedCreateWithoutOrderInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutOrderInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional()
}).strict();

export const EnumOrderStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumOrderStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => OrderStatusSchema).optional()
}).strict();

export const ProductUpdateOneRequiredWithoutOrderNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutOrderNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutOrderInputSchema),z.lazy(() => ProductUncheckedCreateWithoutOrderInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutOrderInputSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutOrderInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProductUpdateToOneWithWhereWithoutOrderInputSchema),z.lazy(() => ProductUpdateWithoutOrderInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutOrderInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  contains: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  startsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  endsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  contains: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  startsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  endsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.union([ z.boolean(),z.lazy(() => BooleanFieldRefInputSchema) ]).optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  contains: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  startsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  endsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.union([ z.boolean(),z.lazy(() => BooleanFieldRefInputSchema) ]).optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> = z.object({
  equals: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const NestedFloatNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatNullableWithAggregatesFilter> = z.object({
  equals: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatNullableFilterSchema).optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  contains: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  startsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  endsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedEnumOrderStatusFilterSchema: z.ZodType<Prisma.NestedEnumOrderStatusFilter> = z.object({
  equals: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldRefInputSchema) ]).optional(),
  in: z.lazy(() => OrderStatusSchema).array().optional(),
  notIn: z.lazy(() => OrderStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => NestedEnumOrderStatusFilterSchema) ]).optional(),
}).strict();

export const NestedEnumOrderStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumOrderStatusWithAggregatesFilter> = z.object({
  equals: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldRefInputSchema) ]).optional(),
  in: z.lazy(() => OrderStatusSchema).array().optional(),
  notIn: z.lazy(() => OrderStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => NestedEnumOrderStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumOrderStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumOrderStatusFilterSchema).optional()
}).strict();

export const ProductCreateWithoutBrandInputSchema: z.ZodType<Prisma.ProductCreateWithoutBrandInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string(),
  reference: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isPublished: z.boolean().optional(),
  images: z.string(),
  tags: z.string(),
  price: z.number(),
  salePrice: z.number().optional().nullable(),
  onSale: z.boolean().optional(),
  stock: z.number().int().optional(),
  restockAlert: z.number().int().optional().nullable(),
  minBuy: z.number().int().optional(),
  maxBuy: z.number().int().optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutProductsInputSchema).optional(),
  author: z.lazy(() => AuthorCreateNestedOneWithoutProductsInputSchema).optional(),
  Order: z.lazy(() => OrderCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutBrandInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutBrandInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string(),
  reference: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isPublished: z.boolean().optional(),
  images: z.string(),
  tags: z.string(),
  price: z.number(),
  salePrice: z.number().optional().nullable(),
  onSale: z.boolean().optional(),
  stock: z.number().int().optional(),
  restockAlert: z.number().int().optional().nullable(),
  minBuy: z.number().int().optional(),
  maxBuy: z.number().int().optional(),
  authorId: z.string().optional().nullable(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  Order: z.lazy(() => OrderUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutBrandInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutBrandInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutBrandInputSchema),z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema) ]),
}).strict();

export const ProductCreateManyBrandInputEnvelopeSchema: z.ZodType<Prisma.ProductCreateManyBrandInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProductCreateManyBrandInputSchema),z.lazy(() => ProductCreateManyBrandInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ProductUpsertWithWhereUniqueWithoutBrandInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutBrandInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductUpdateWithoutBrandInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutBrandInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutBrandInputSchema),z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema) ]),
}).strict();

export const ProductUpdateWithWhereUniqueWithoutBrandInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutBrandInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateWithoutBrandInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutBrandInputSchema) ]),
}).strict();

export const ProductUpdateManyWithWhereWithoutBrandInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutBrandInput> = z.object({
  where: z.lazy(() => ProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateManyMutationInputSchema),z.lazy(() => ProductUncheckedUpdateManyWithoutBrandInputSchema) ]),
}).strict();

export const ProductScalarWhereInputSchema: z.ZodType<Prisma.ProductScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  reference: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  isPublished: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  images: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tags: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  salePrice: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  onSale: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  stock: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  restockAlert: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  minBuy: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  maxBuy: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  brandId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  authorId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const ProductCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductCreateWithoutCategoriesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string(),
  reference: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isPublished: z.boolean().optional(),
  images: z.string(),
  tags: z.string(),
  price: z.number(),
  salePrice: z.number().optional().nullable(),
  onSale: z.boolean().optional(),
  stock: z.number().int().optional(),
  restockAlert: z.number().int().optional().nullable(),
  minBuy: z.number().int().optional(),
  maxBuy: z.number().int().optional(),
  brand: z.lazy(() => BrandCreateNestedOneWithoutProductsInputSchema).optional(),
  author: z.lazy(() => AuthorCreateNestedOneWithoutProductsInputSchema).optional(),
  Order: z.lazy(() => OrderCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutCategoriesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string(),
  reference: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isPublished: z.boolean().optional(),
  images: z.string(),
  tags: z.string(),
  price: z.number(),
  salePrice: z.number().optional().nullable(),
  onSale: z.boolean().optional(),
  stock: z.number().int().optional(),
  restockAlert: z.number().int().optional().nullable(),
  minBuy: z.number().int().optional(),
  maxBuy: z.number().int().optional(),
  brandId: z.string().optional().nullable(),
  authorId: z.string().optional().nullable(),
  Order: z.lazy(() => OrderUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutCategoriesInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema) ]),
}).strict();

export const ProductUpsertWithWhereUniqueWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutCategoriesInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductUpdateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutCategoriesInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema) ]),
}).strict();

export const ProductUpdateWithWhereUniqueWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutCategoriesInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutCategoriesInputSchema) ]),
}).strict();

export const ProductUpdateManyWithWhereWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutCategoriesInput> = z.object({
  where: z.lazy(() => ProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateManyMutationInputSchema),z.lazy(() => ProductUncheckedUpdateManyWithoutCategoriesInputSchema) ]),
}).strict();

export const ProductCreateWithoutAuthorInputSchema: z.ZodType<Prisma.ProductCreateWithoutAuthorInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string(),
  reference: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isPublished: z.boolean().optional(),
  images: z.string(),
  tags: z.string(),
  price: z.number(),
  salePrice: z.number().optional().nullable(),
  onSale: z.boolean().optional(),
  stock: z.number().int().optional(),
  restockAlert: z.number().int().optional().nullable(),
  minBuy: z.number().int().optional(),
  maxBuy: z.number().int().optional(),
  brand: z.lazy(() => BrandCreateNestedOneWithoutProductsInputSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutProductsInputSchema).optional(),
  Order: z.lazy(() => OrderCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutAuthorInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutAuthorInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string(),
  reference: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isPublished: z.boolean().optional(),
  images: z.string(),
  tags: z.string(),
  price: z.number(),
  salePrice: z.number().optional().nullable(),
  onSale: z.boolean().optional(),
  stock: z.number().int().optional(),
  restockAlert: z.number().int().optional().nullable(),
  minBuy: z.number().int().optional(),
  maxBuy: z.number().int().optional(),
  brandId: z.string().optional().nullable(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  Order: z.lazy(() => OrderUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutAuthorInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutAuthorInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutAuthorInputSchema),z.lazy(() => ProductUncheckedCreateWithoutAuthorInputSchema) ]),
}).strict();

export const ProductCreateManyAuthorInputEnvelopeSchema: z.ZodType<Prisma.ProductCreateManyAuthorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProductCreateManyAuthorInputSchema),z.lazy(() => ProductCreateManyAuthorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ProductUpsertWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductUpdateWithoutAuthorInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutAuthorInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutAuthorInputSchema),z.lazy(() => ProductUncheckedCreateWithoutAuthorInputSchema) ]),
}).strict();

export const ProductUpdateWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateWithoutAuthorInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutAuthorInputSchema) ]),
}).strict();

export const ProductUpdateManyWithWhereWithoutAuthorInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutAuthorInput> = z.object({
  where: z.lazy(() => ProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateManyMutationInputSchema),z.lazy(() => ProductUncheckedUpdateManyWithoutAuthorInputSchema) ]),
}).strict();

export const BrandCreateWithoutProductsInputSchema: z.ZodType<Prisma.BrandCreateWithoutProductsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BrandUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.BrandUncheckedCreateWithoutProductsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BrandCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.BrandCreateOrConnectWithoutProductsInput> = z.object({
  where: z.lazy(() => BrandWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BrandCreateWithoutProductsInputSchema),z.lazy(() => BrandUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const CategoryCreateWithoutProductsInputSchema: z.ZodType<Prisma.CategoryCreateWithoutProductsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CategoryUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutProductsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CategoryCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutProductsInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const AuthorCreateWithoutProductsInputSchema: z.ZodType<Prisma.AuthorCreateWithoutProductsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AuthorUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.AuthorUncheckedCreateWithoutProductsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AuthorCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.AuthorCreateOrConnectWithoutProductsInput> = z.object({
  where: z.lazy(() => AuthorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AuthorCreateWithoutProductsInputSchema),z.lazy(() => AuthorUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const OrderCreateWithoutProductInputSchema: z.ZodType<Prisma.OrderCreateWithoutProductInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => OrderStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutProductInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => OrderStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutProductInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderCreateWithoutProductInputSchema),z.lazy(() => OrderUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export const OrderCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.OrderCreateManyProductInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrderCreateManyProductInputSchema),z.lazy(() => OrderCreateManyProductInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const BrandUpsertWithoutProductsInputSchema: z.ZodType<Prisma.BrandUpsertWithoutProductsInput> = z.object({
  update: z.union([ z.lazy(() => BrandUpdateWithoutProductsInputSchema),z.lazy(() => BrandUncheckedUpdateWithoutProductsInputSchema) ]),
  create: z.union([ z.lazy(() => BrandCreateWithoutProductsInputSchema),z.lazy(() => BrandUncheckedCreateWithoutProductsInputSchema) ]),
  where: z.lazy(() => BrandWhereInputSchema).optional()
}).strict();

export const BrandUpdateToOneWithWhereWithoutProductsInputSchema: z.ZodType<Prisma.BrandUpdateToOneWithWhereWithoutProductsInput> = z.object({
  where: z.lazy(() => BrandWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BrandUpdateWithoutProductsInputSchema),z.lazy(() => BrandUncheckedUpdateWithoutProductsInputSchema) ]),
}).strict();

export const BrandUpdateWithoutProductsInputSchema: z.ZodType<Prisma.BrandUpdateWithoutProductsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BrandUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.BrandUncheckedUpdateWithoutProductsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryUpsertWithWhereUniqueWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUpsertWithWhereUniqueWithoutProductsInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CategoryUpdateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutProductsInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const CategoryUpdateWithWhereUniqueWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUpdateWithWhereUniqueWithoutProductsInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CategoryUpdateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutProductsInputSchema) ]),
}).strict();

export const CategoryUpdateManyWithWhereWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUpdateManyWithWhereWithoutProductsInput> = z.object({
  where: z.lazy(() => CategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CategoryUpdateManyMutationInputSchema),z.lazy(() => CategoryUncheckedUpdateManyWithoutProductsInputSchema) ]),
}).strict();

export const CategoryScalarWhereInputSchema: z.ZodType<Prisma.CategoryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AuthorUpsertWithoutProductsInputSchema: z.ZodType<Prisma.AuthorUpsertWithoutProductsInput> = z.object({
  update: z.union([ z.lazy(() => AuthorUpdateWithoutProductsInputSchema),z.lazy(() => AuthorUncheckedUpdateWithoutProductsInputSchema) ]),
  create: z.union([ z.lazy(() => AuthorCreateWithoutProductsInputSchema),z.lazy(() => AuthorUncheckedCreateWithoutProductsInputSchema) ]),
  where: z.lazy(() => AuthorWhereInputSchema).optional()
}).strict();

export const AuthorUpdateToOneWithWhereWithoutProductsInputSchema: z.ZodType<Prisma.AuthorUpdateToOneWithWhereWithoutProductsInput> = z.object({
  where: z.lazy(() => AuthorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AuthorUpdateWithoutProductsInputSchema),z.lazy(() => AuthorUncheckedUpdateWithoutProductsInputSchema) ]),
}).strict();

export const AuthorUpdateWithoutProductsInputSchema: z.ZodType<Prisma.AuthorUpdateWithoutProductsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuthorUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.AuthorUncheckedUpdateWithoutProductsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrderUpdateWithoutProductInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutProductInputSchema) ]),
  create: z.union([ z.lazy(() => OrderCreateWithoutProductInputSchema),z.lazy(() => OrderUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export const OrderUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateWithoutProductInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutProductInputSchema) ]),
}).strict();

export const OrderUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutProductInput> = z.object({
  where: z.lazy(() => OrderScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateManyMutationInputSchema),z.lazy(() => OrderUncheckedUpdateManyWithoutProductInputSchema) ]),
}).strict();

export const OrderScalarWhereInputSchema: z.ZodType<Prisma.OrderScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumOrderStatusFilterSchema),z.lazy(() => OrderStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  productId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ProductCreateWithoutOrderInputSchema: z.ZodType<Prisma.ProductCreateWithoutOrderInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string(),
  reference: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isPublished: z.boolean().optional(),
  images: z.string(),
  tags: z.string(),
  price: z.number(),
  salePrice: z.number().optional().nullable(),
  onSale: z.boolean().optional(),
  stock: z.number().int().optional(),
  restockAlert: z.number().int().optional().nullable(),
  minBuy: z.number().int().optional(),
  maxBuy: z.number().int().optional(),
  brand: z.lazy(() => BrandCreateNestedOneWithoutProductsInputSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutProductsInputSchema).optional(),
  author: z.lazy(() => AuthorCreateNestedOneWithoutProductsInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutOrderInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutOrderInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string(),
  reference: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isPublished: z.boolean().optional(),
  images: z.string(),
  tags: z.string(),
  price: z.number(),
  salePrice: z.number().optional().nullable(),
  onSale: z.boolean().optional(),
  stock: z.number().int().optional(),
  restockAlert: z.number().int().optional().nullable(),
  minBuy: z.number().int().optional(),
  maxBuy: z.number().int().optional(),
  brandId: z.string().optional().nullable(),
  authorId: z.string().optional().nullable(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutProductsInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutOrderInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutOrderInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutOrderInputSchema),z.lazy(() => ProductUncheckedCreateWithoutOrderInputSchema) ]),
}).strict();

export const ProductUpsertWithoutOrderInputSchema: z.ZodType<Prisma.ProductUpsertWithoutOrderInput> = z.object({
  update: z.union([ z.lazy(() => ProductUpdateWithoutOrderInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutOrderInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutOrderInputSchema),z.lazy(() => ProductUncheckedCreateWithoutOrderInputSchema) ]),
  where: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export const ProductUpdateToOneWithWhereWithoutOrderInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutOrderInput> = z.object({
  where: z.lazy(() => ProductWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProductUpdateWithoutOrderInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutOrderInputSchema) ]),
}).strict();

export const ProductUpdateWithoutOrderInputSchema: z.ZodType<Prisma.ProductUpdateWithoutOrderInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  salePrice: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  onSale: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  restockAlert: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  minBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  maxBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brand: z.lazy(() => BrandUpdateOneWithoutProductsNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutProductsNestedInputSchema).optional(),
  author: z.lazy(() => AuthorUpdateOneWithoutProductsNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutOrderInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutOrderInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  salePrice: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  onSale: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  restockAlert: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  minBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  maxBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  authorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutProductsNestedInputSchema).optional()
}).strict();

export const ProductCreateManyBrandInputSchema: z.ZodType<Prisma.ProductCreateManyBrandInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string(),
  reference: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isPublished: z.boolean().optional(),
  images: z.string(),
  tags: z.string(),
  price: z.number(),
  salePrice: z.number().optional().nullable(),
  onSale: z.boolean().optional(),
  stock: z.number().int().optional(),
  restockAlert: z.number().int().optional().nullable(),
  minBuy: z.number().int().optional(),
  maxBuy: z.number().int().optional(),
  authorId: z.string().optional().nullable()
}).strict();

export const ProductUpdateWithoutBrandInputSchema: z.ZodType<Prisma.ProductUpdateWithoutBrandInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  salePrice: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  onSale: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  restockAlert: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  minBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  maxBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutProductsNestedInputSchema).optional(),
  author: z.lazy(() => AuthorUpdateOneWithoutProductsNestedInputSchema).optional(),
  Order: z.lazy(() => OrderUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutBrandInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutBrandInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  salePrice: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  onSale: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  restockAlert: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  minBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  maxBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  Order: z.lazy(() => OrderUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateManyWithoutBrandInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutBrandInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  salePrice: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  onSale: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  restockAlert: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  minBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  maxBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProductUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductUpdateWithoutCategoriesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  salePrice: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  onSale: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  restockAlert: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  minBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  maxBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brand: z.lazy(() => BrandUpdateOneWithoutProductsNestedInputSchema).optional(),
  author: z.lazy(() => AuthorUpdateOneWithoutProductsNestedInputSchema).optional(),
  Order: z.lazy(() => OrderUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutCategoriesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  salePrice: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  onSale: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  restockAlert: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  minBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  maxBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  authorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Order: z.lazy(() => OrderUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateManyWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutCategoriesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  salePrice: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  onSale: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  restockAlert: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  minBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  maxBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  authorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProductCreateManyAuthorInputSchema: z.ZodType<Prisma.ProductCreateManyAuthorInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string(),
  reference: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isPublished: z.boolean().optional(),
  images: z.string(),
  tags: z.string(),
  price: z.number(),
  salePrice: z.number().optional().nullable(),
  onSale: z.boolean().optional(),
  stock: z.number().int().optional(),
  restockAlert: z.number().int().optional().nullable(),
  minBuy: z.number().int().optional(),
  maxBuy: z.number().int().optional(),
  brandId: z.string().optional().nullable()
}).strict();

export const ProductUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.ProductUpdateWithoutAuthorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  salePrice: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  onSale: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  restockAlert: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  minBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  maxBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brand: z.lazy(() => BrandUpdateOneWithoutProductsNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutProductsNestedInputSchema).optional(),
  Order: z.lazy(() => OrderUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutAuthorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  salePrice: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  onSale: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  restockAlert: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  minBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  maxBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  Order: z.lazy(() => OrderUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateManyWithoutAuthorInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutAuthorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  salePrice: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  onSale: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  restockAlert: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  minBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  maxBuy: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const OrderCreateManyProductInputSchema: z.ZodType<Prisma.OrderCreateManyProductInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => OrderStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CategoryUpdateWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUpdateWithoutProductsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateWithoutProductsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryUncheckedUpdateManyWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateManyWithoutProductsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderUpdateWithoutProductInputSchema: z.ZodType<Prisma.OrderUpdateWithoutProductInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderUncheckedUpdateWithoutProductInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateWithoutProductInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderUncheckedUpdateManyWithoutProductInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutProductInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const BrandFindFirstArgsSchema: z.ZodType<Prisma.BrandFindFirstArgs> = z.object({
  select: BrandSelectSchema.optional(),
  include: BrandIncludeSchema.optional(),
  where: BrandWhereInputSchema.optional(),
  orderBy: z.union([ BrandOrderByWithRelationInputSchema.array(),BrandOrderByWithRelationInputSchema ]).optional(),
  cursor: BrandWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BrandScalarFieldEnumSchema,BrandScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const BrandFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BrandFindFirstOrThrowArgs> = z.object({
  select: BrandSelectSchema.optional(),
  include: BrandIncludeSchema.optional(),
  where: BrandWhereInputSchema.optional(),
  orderBy: z.union([ BrandOrderByWithRelationInputSchema.array(),BrandOrderByWithRelationInputSchema ]).optional(),
  cursor: BrandWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BrandScalarFieldEnumSchema,BrandScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const BrandFindManyArgsSchema: z.ZodType<Prisma.BrandFindManyArgs> = z.object({
  select: BrandSelectSchema.optional(),
  include: BrandIncludeSchema.optional(),
  where: BrandWhereInputSchema.optional(),
  orderBy: z.union([ BrandOrderByWithRelationInputSchema.array(),BrandOrderByWithRelationInputSchema ]).optional(),
  cursor: BrandWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BrandScalarFieldEnumSchema,BrandScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const BrandAggregateArgsSchema: z.ZodType<Prisma.BrandAggregateArgs> = z.object({
  where: BrandWhereInputSchema.optional(),
  orderBy: z.union([ BrandOrderByWithRelationInputSchema.array(),BrandOrderByWithRelationInputSchema ]).optional(),
  cursor: BrandWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const BrandGroupByArgsSchema: z.ZodType<Prisma.BrandGroupByArgs> = z.object({
  where: BrandWhereInputSchema.optional(),
  orderBy: z.union([ BrandOrderByWithAggregationInputSchema.array(),BrandOrderByWithAggregationInputSchema ]).optional(),
  by: BrandScalarFieldEnumSchema.array(),
  having: BrandScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const BrandFindUniqueArgsSchema: z.ZodType<Prisma.BrandFindUniqueArgs> = z.object({
  select: BrandSelectSchema.optional(),
  include: BrandIncludeSchema.optional(),
  where: BrandWhereUniqueInputSchema,
}).strict()

export const BrandFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BrandFindUniqueOrThrowArgs> = z.object({
  select: BrandSelectSchema.optional(),
  include: BrandIncludeSchema.optional(),
  where: BrandWhereUniqueInputSchema,
}).strict()

export const CategoryFindFirstArgsSchema: z.ZodType<Prisma.CategoryFindFirstArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CategoryScalarFieldEnumSchema,CategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const CategoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CategoryFindFirstOrThrowArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CategoryScalarFieldEnumSchema,CategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const CategoryFindManyArgsSchema: z.ZodType<Prisma.CategoryFindManyArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CategoryScalarFieldEnumSchema,CategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const CategoryAggregateArgsSchema: z.ZodType<Prisma.CategoryAggregateArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CategoryGroupByArgsSchema: z.ZodType<Prisma.CategoryGroupByArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithAggregationInputSchema.array(),CategoryOrderByWithAggregationInputSchema ]).optional(),
  by: CategoryScalarFieldEnumSchema.array(),
  having: CategoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CategoryFindUniqueArgsSchema: z.ZodType<Prisma.CategoryFindUniqueArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict()

export const CategoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CategoryFindUniqueOrThrowArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict()

export const AuthorFindFirstArgsSchema: z.ZodType<Prisma.AuthorFindFirstArgs> = z.object({
  select: AuthorSelectSchema.optional(),
  include: AuthorIncludeSchema.optional(),
  where: AuthorWhereInputSchema.optional(),
  orderBy: z.union([ AuthorOrderByWithRelationInputSchema.array(),AuthorOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AuthorScalarFieldEnumSchema,AuthorScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const AuthorFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AuthorFindFirstOrThrowArgs> = z.object({
  select: AuthorSelectSchema.optional(),
  include: AuthorIncludeSchema.optional(),
  where: AuthorWhereInputSchema.optional(),
  orderBy: z.union([ AuthorOrderByWithRelationInputSchema.array(),AuthorOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AuthorScalarFieldEnumSchema,AuthorScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const AuthorFindManyArgsSchema: z.ZodType<Prisma.AuthorFindManyArgs> = z.object({
  select: AuthorSelectSchema.optional(),
  include: AuthorIncludeSchema.optional(),
  where: AuthorWhereInputSchema.optional(),
  orderBy: z.union([ AuthorOrderByWithRelationInputSchema.array(),AuthorOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AuthorScalarFieldEnumSchema,AuthorScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const AuthorAggregateArgsSchema: z.ZodType<Prisma.AuthorAggregateArgs> = z.object({
  where: AuthorWhereInputSchema.optional(),
  orderBy: z.union([ AuthorOrderByWithRelationInputSchema.array(),AuthorOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AuthorGroupByArgsSchema: z.ZodType<Prisma.AuthorGroupByArgs> = z.object({
  where: AuthorWhereInputSchema.optional(),
  orderBy: z.union([ AuthorOrderByWithAggregationInputSchema.array(),AuthorOrderByWithAggregationInputSchema ]).optional(),
  by: AuthorScalarFieldEnumSchema.array(),
  having: AuthorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AuthorFindUniqueArgsSchema: z.ZodType<Prisma.AuthorFindUniqueArgs> = z.object({
  select: AuthorSelectSchema.optional(),
  include: AuthorIncludeSchema.optional(),
  where: AuthorWhereUniqueInputSchema,
}).strict()

export const AuthorFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AuthorFindUniqueOrThrowArgs> = z.object({
  select: AuthorSelectSchema.optional(),
  include: AuthorIncludeSchema.optional(),
  where: AuthorWhereUniqueInputSchema,
}).strict()

export const ProductFindFirstArgsSchema: z.ZodType<Prisma.ProductFindFirstArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema,ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const ProductFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductFindFirstOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema,ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const ProductFindManyArgsSchema: z.ZodType<Prisma.ProductFindManyArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema,ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const ProductAggregateArgsSchema: z.ZodType<Prisma.ProductAggregateArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ProductGroupByArgsSchema: z.ZodType<Prisma.ProductGroupByArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithAggregationInputSchema.array(),ProductOrderByWithAggregationInputSchema ]).optional(),
  by: ProductScalarFieldEnumSchema.array(),
  having: ProductScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ProductFindUniqueArgsSchema: z.ZodType<Prisma.ProductFindUniqueArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict()

export const ProductFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductFindUniqueOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict()

export const OrderFindFirstArgsSchema: z.ZodType<Prisma.OrderFindFirstArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereInputSchema.optional(),
  orderBy: z.union([ OrderOrderByWithRelationInputSchema.array(),OrderOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrderScalarFieldEnumSchema,OrderScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const OrderFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OrderFindFirstOrThrowArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereInputSchema.optional(),
  orderBy: z.union([ OrderOrderByWithRelationInputSchema.array(),OrderOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrderScalarFieldEnumSchema,OrderScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const OrderFindManyArgsSchema: z.ZodType<Prisma.OrderFindManyArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereInputSchema.optional(),
  orderBy: z.union([ OrderOrderByWithRelationInputSchema.array(),OrderOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrderScalarFieldEnumSchema,OrderScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const OrderAggregateArgsSchema: z.ZodType<Prisma.OrderAggregateArgs> = z.object({
  where: OrderWhereInputSchema.optional(),
  orderBy: z.union([ OrderOrderByWithRelationInputSchema.array(),OrderOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const OrderGroupByArgsSchema: z.ZodType<Prisma.OrderGroupByArgs> = z.object({
  where: OrderWhereInputSchema.optional(),
  orderBy: z.union([ OrderOrderByWithAggregationInputSchema.array(),OrderOrderByWithAggregationInputSchema ]).optional(),
  by: OrderScalarFieldEnumSchema.array(),
  having: OrderScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const OrderFindUniqueArgsSchema: z.ZodType<Prisma.OrderFindUniqueArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereUniqueInputSchema,
}).strict()

export const OrderFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OrderFindUniqueOrThrowArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereUniqueInputSchema,
}).strict()

export const BrandCreateArgsSchema: z.ZodType<Prisma.BrandCreateArgs> = z.object({
  select: BrandSelectSchema.optional(),
  include: BrandIncludeSchema.optional(),
  data: z.union([ BrandCreateInputSchema,BrandUncheckedCreateInputSchema ]),
}).strict()

export const BrandUpsertArgsSchema: z.ZodType<Prisma.BrandUpsertArgs> = z.object({
  select: BrandSelectSchema.optional(),
  include: BrandIncludeSchema.optional(),
  where: BrandWhereUniqueInputSchema,
  create: z.union([ BrandCreateInputSchema,BrandUncheckedCreateInputSchema ]),
  update: z.union([ BrandUpdateInputSchema,BrandUncheckedUpdateInputSchema ]),
}).strict()

export const BrandCreateManyArgsSchema: z.ZodType<Prisma.BrandCreateManyArgs> = z.object({
  data: z.union([ BrandCreateManyInputSchema,BrandCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const BrandDeleteArgsSchema: z.ZodType<Prisma.BrandDeleteArgs> = z.object({
  select: BrandSelectSchema.optional(),
  include: BrandIncludeSchema.optional(),
  where: BrandWhereUniqueInputSchema,
}).strict()

export const BrandUpdateArgsSchema: z.ZodType<Prisma.BrandUpdateArgs> = z.object({
  select: BrandSelectSchema.optional(),
  include: BrandIncludeSchema.optional(),
  data: z.union([ BrandUpdateInputSchema,BrandUncheckedUpdateInputSchema ]),
  where: BrandWhereUniqueInputSchema,
}).strict()

export const BrandUpdateManyArgsSchema: z.ZodType<Prisma.BrandUpdateManyArgs> = z.object({
  data: z.union([ BrandUpdateManyMutationInputSchema,BrandUncheckedUpdateManyInputSchema ]),
  where: BrandWhereInputSchema.optional(),
}).strict()

export const BrandDeleteManyArgsSchema: z.ZodType<Prisma.BrandDeleteManyArgs> = z.object({
  where: BrandWhereInputSchema.optional(),
}).strict()

export const CategoryCreateArgsSchema: z.ZodType<Prisma.CategoryCreateArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  data: z.union([ CategoryCreateInputSchema,CategoryUncheckedCreateInputSchema ]),
}).strict()

export const CategoryUpsertArgsSchema: z.ZodType<Prisma.CategoryUpsertArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
  create: z.union([ CategoryCreateInputSchema,CategoryUncheckedCreateInputSchema ]),
  update: z.union([ CategoryUpdateInputSchema,CategoryUncheckedUpdateInputSchema ]),
}).strict()

export const CategoryCreateManyArgsSchema: z.ZodType<Prisma.CategoryCreateManyArgs> = z.object({
  data: z.union([ CategoryCreateManyInputSchema,CategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const CategoryDeleteArgsSchema: z.ZodType<Prisma.CategoryDeleteArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict()

export const CategoryUpdateArgsSchema: z.ZodType<Prisma.CategoryUpdateArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  data: z.union([ CategoryUpdateInputSchema,CategoryUncheckedUpdateInputSchema ]),
  where: CategoryWhereUniqueInputSchema,
}).strict()

export const CategoryUpdateManyArgsSchema: z.ZodType<Prisma.CategoryUpdateManyArgs> = z.object({
  data: z.union([ CategoryUpdateManyMutationInputSchema,CategoryUncheckedUpdateManyInputSchema ]),
  where: CategoryWhereInputSchema.optional(),
}).strict()

export const CategoryDeleteManyArgsSchema: z.ZodType<Prisma.CategoryDeleteManyArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
}).strict()

export const AuthorCreateArgsSchema: z.ZodType<Prisma.AuthorCreateArgs> = z.object({
  select: AuthorSelectSchema.optional(),
  include: AuthorIncludeSchema.optional(),
  data: z.union([ AuthorCreateInputSchema,AuthorUncheckedCreateInputSchema ]),
}).strict()

export const AuthorUpsertArgsSchema: z.ZodType<Prisma.AuthorUpsertArgs> = z.object({
  select: AuthorSelectSchema.optional(),
  include: AuthorIncludeSchema.optional(),
  where: AuthorWhereUniqueInputSchema,
  create: z.union([ AuthorCreateInputSchema,AuthorUncheckedCreateInputSchema ]),
  update: z.union([ AuthorUpdateInputSchema,AuthorUncheckedUpdateInputSchema ]),
}).strict()

export const AuthorCreateManyArgsSchema: z.ZodType<Prisma.AuthorCreateManyArgs> = z.object({
  data: z.union([ AuthorCreateManyInputSchema,AuthorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const AuthorDeleteArgsSchema: z.ZodType<Prisma.AuthorDeleteArgs> = z.object({
  select: AuthorSelectSchema.optional(),
  include: AuthorIncludeSchema.optional(),
  where: AuthorWhereUniqueInputSchema,
}).strict()

export const AuthorUpdateArgsSchema: z.ZodType<Prisma.AuthorUpdateArgs> = z.object({
  select: AuthorSelectSchema.optional(),
  include: AuthorIncludeSchema.optional(),
  data: z.union([ AuthorUpdateInputSchema,AuthorUncheckedUpdateInputSchema ]),
  where: AuthorWhereUniqueInputSchema,
}).strict()

export const AuthorUpdateManyArgsSchema: z.ZodType<Prisma.AuthorUpdateManyArgs> = z.object({
  data: z.union([ AuthorUpdateManyMutationInputSchema,AuthorUncheckedUpdateManyInputSchema ]),
  where: AuthorWhereInputSchema.optional(),
}).strict()

export const AuthorDeleteManyArgsSchema: z.ZodType<Prisma.AuthorDeleteManyArgs> = z.object({
  where: AuthorWhereInputSchema.optional(),
}).strict()

export const ProductCreateArgsSchema: z.ZodType<Prisma.ProductCreateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  data: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
}).strict()

export const ProductUpsertArgsSchema: z.ZodType<Prisma.ProductUpsertArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
  create: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
  update: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
}).strict()

export const ProductCreateManyArgsSchema: z.ZodType<Prisma.ProductCreateManyArgs> = z.object({
  data: z.union([ ProductCreateManyInputSchema,ProductCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const ProductDeleteArgsSchema: z.ZodType<Prisma.ProductDeleteArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict()

export const ProductUpdateArgsSchema: z.ZodType<Prisma.ProductUpdateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  data: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
  where: ProductWhereUniqueInputSchema,
}).strict()

export const ProductUpdateManyArgsSchema: z.ZodType<Prisma.ProductUpdateManyArgs> = z.object({
  data: z.union([ ProductUpdateManyMutationInputSchema,ProductUncheckedUpdateManyInputSchema ]),
  where: ProductWhereInputSchema.optional(),
}).strict()

export const ProductDeleteManyArgsSchema: z.ZodType<Prisma.ProductDeleteManyArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
}).strict()

export const OrderCreateArgsSchema: z.ZodType<Prisma.OrderCreateArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  data: z.union([ OrderCreateInputSchema,OrderUncheckedCreateInputSchema ]),
}).strict()

export const OrderUpsertArgsSchema: z.ZodType<Prisma.OrderUpsertArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereUniqueInputSchema,
  create: z.union([ OrderCreateInputSchema,OrderUncheckedCreateInputSchema ]),
  update: z.union([ OrderUpdateInputSchema,OrderUncheckedUpdateInputSchema ]),
}).strict()

export const OrderCreateManyArgsSchema: z.ZodType<Prisma.OrderCreateManyArgs> = z.object({
  data: z.union([ OrderCreateManyInputSchema,OrderCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const OrderDeleteArgsSchema: z.ZodType<Prisma.OrderDeleteArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereUniqueInputSchema,
}).strict()

export const OrderUpdateArgsSchema: z.ZodType<Prisma.OrderUpdateArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  data: z.union([ OrderUpdateInputSchema,OrderUncheckedUpdateInputSchema ]),
  where: OrderWhereUniqueInputSchema,
}).strict()

export const OrderUpdateManyArgsSchema: z.ZodType<Prisma.OrderUpdateManyArgs> = z.object({
  data: z.union([ OrderUpdateManyMutationInputSchema,OrderUncheckedUpdateManyInputSchema ]),
  where: OrderWhereInputSchema.optional(),
}).strict()

export const OrderDeleteManyArgsSchema: z.ZodType<Prisma.OrderDeleteManyArgs> = z.object({
  where: OrderWhereInputSchema.optional(),
}).strict()