import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const categories = [
  {
    name: 'Teclados',
    slug: 'teclados',
    description: 'Teclados mecânicos e ópticos de alta performance tática',
    active: true,
  },
  {
    name: 'Mouses',
    slug: 'mouses',
    description: 'Mouses ergonômicos e ultraleves de alta precisão',
    active: true,
  },
  {
    name: 'Monitores',
    slug: 'monitores',
    description: 'Monitores Ultrawide e 4K para máxima imersão',
    active: true,
  },
  {
    name: 'Áudio',
    slug: 'audio',
    description: 'Headsets, fones e microfones com cancelamento de ruído',
    active: true,
  },
  {
    name: 'Acessórios',
    slug: 'acessorios',
    description: 'Mousepads, suportes e cabos customizados',
    active: true,
  },
  {
    name: 'Setups Completos',
    slug: 'setups-completos',
    description: 'Estações táticas e minimalistas pré-configuradas',
    active: true,
  },
  {
    name: 'Cadeiras',
    slug: 'cadeiras',
    description: 'Cadeiras ergonômicas para longas sessões de uso',
    active: true,
  },
  {
    name: 'Componentes',
    slug: 'componentes',
    description: 'Placas de vídeo, processadores e memórias',
    active: true,
  },
]

const products = [
  {
    name: 'Teclado Mecânico K600',
    slug: 'teclado-mecanico-k600',
    description: 'Teclado mecânico tátil com switches Brown e iluminação RGB customizável.',
    price: '459.99',
    colors: ['Black', 'White'],
    images: ['https://placehold.co/600x400?text=teclado-k600+1', 'https://placehold.co/600x400?text=teclado-k600+2'],
    sizes: ['ANSI', 'ABNT2'], // Usando sizes para layout
    stock: 120,
    active: true,
  },
  {
    name: 'Mouse Ultralight Pro X',
    slug: 'mouse-ultralight-pro-x',
    description: 'Mouse ultraleve de 60g com sensor óptico de 26K DPI.',
    price: '349.90',
    colors: ['Black', 'White'],
    images: ['https://placehold.co/600x400?text=mouse-pro-x+1'],
    sizes: ['Único'],
    stock: 60,
    active: true,
  },
  {
    name: 'Monitor Ultrawide 34" 144Hz',
    slug: 'monitor-ultrawide-34',
    description: 'Monitor curvo ultrawide focado em produtividade e imersão.',
    price: '2499.50',
    colors: ['Black'],
    images: ['https://placehold.co/600x400?text=monitor-ultrawide+1'],
    sizes: ['34"'],
    stock: 40,
    active: true,
  },
  {
    name: 'Headset Wireless Stealth',
    slug: 'headset-wireless-stealth',
    description: 'Headset sem fio com áudio espacial e bateria de 50 horas.',
    price: '799.00',
    colors: ['Black', 'Gray'],
    images: ['https://placehold.co/600x400?text=headset-stealth+1'],
    sizes: ['Único'],
    stock: 200,
    active: true,
  },
  {
    name: 'Mousepad Control Extended',
    slug: 'mousepad-control-extended',
    description: 'Mousepad de tecido premium para máximo controle.',
    price: '119.99',
    colors: ['Black', 'Navy'],
    images: ['https://placehold.co/600x400?text=mousepad-control+1'],
    sizes: ['L', 'XL'],
    stock: 80,
    active: true,
  },
  {
    name: 'Setup Tático Stealth',
    slug: 'setup-tatico-stealth',
    description: 'Combo completo: Teclado, Mouse e Headset da linha Stealth.',
    price: '1499.00',
    colors: ['Black'],
    images: ['https://placehold.co/600x400?text=setup-stealth+1'],
    sizes: ['Único'],
    stock: 30,
    active: true,
  },
  {
    name: 'Cadeira ErgoPro',
    slug: 'cadeira-ergopro',
    description: 'Cadeira ergonômica com suporte lombar dinâmico.',
    price: '1899.99',
    colors: ['Black', 'Gray'],
    images: ['https://placehold.co/600x400?text=cadeira-ergopro+1'],
    sizes: ['Único'],
    stock: 75,
    active: true,
  },
  {
    name: 'Cabo USB-C Custom Coiled',
    slug: 'cabo-usb-c-custom',
    description: 'Cabo enrolado customizado para teclados mecânicos.',
    price: '89.50',
    colors: ['Black', 'White'],
    images: ['https://placehold.co/600x400?text=cabo-coiled+1'],
    sizes: ['1.5m'],
    stock: 150,
    active: true,
  },
  {
    name: 'Suporte Articulado para Monitor',
    slug: 'suporte-monitor',
    description: 'Braço articulado com pistão a gás para 1 monitor.',
    price: '269.00',
    colors: ['Black'],
    images: ['https://placehold.co/600x400?text=suporte-monitor+1'],
    sizes: ['Único'],
    stock: 45,
    active: true,
  },
  {
    name: 'RTX 4070 Ti Super',
    slug: 'rtx-4070-ti-super',
    description: 'Placa de vídeo de alta performance para 1440p e 4K.',
    price: '5499.99',
    colors: ['Black', 'Silver'],
    images: ['https://placehold.co/600x400?text=rtx-4070+1'],
    sizes: ['16GB VRAM'],
    stock: 20,
    active: true,
  },
]

async function main() {
  try {
    // Limpar dados existentes (em ordem devido às FKs)
    await prisma.orderItem.deleteMany({})
    await prisma.order.deleteMany({})
    await prisma.product.deleteMany({})
    await prisma.category.deleteMany({})
    await prisma.user.deleteMany({})
    console.log('🗑️  Dados antigos removidos')

    // Criar usuários
    const user1 = await prisma.user.create({
      data: {
        firstName: 'João',
        lastName: 'Silva',
        email: 'joao@example.com',
        password: '$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FPM0xLqc8y8eMONLr9xOhQ1lUPXIEki', // senha: password123
        cpf: '12345678901',
        phone: '11999999999',
        role: 'USER',
      },
    })

    const user2 = await prisma.user.create({
      data: {
        firstName: 'Maria',
        lastName: 'Santos',
        email: 'maria@example.com',
        password: '$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FPM0xLqc8y8eMONLr9xOhQ1lUPXIEki', // senha: password123
        phone: '11988888888',
        role: 'USER',
      },
    })

    const admin = await prisma.user.create({
      data: {
        firstName: 'Admin',
        lastName: 'System',
        email: 'admin@example.com',
        password: '$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FPM0xLqc8y8eMONLr9xOhQ1lUPXIEki', // senha: password123
        role: 'ADMIN',
      },
    })

    console.log(`✅ 3 usuários criados (${user1.email}, ${user2.email}, ${admin.email})`)

    // Criar categorias
    const createdCategories = await prisma.category.createMany({ data: categories })
    console.log(`✅ ${createdCategories.count} categorias criadas`)

    // Buscar categorias criadas para obter IDs
    const teclados = await prisma.category.findUnique({ where: { slug: 'teclados' } })
    const mouses = await prisma.category.findUnique({ where: { slug: 'mouses' } })
    const monitores = await prisma.category.findUnique({ where: { slug: 'monitores' } })
    const audio = await prisma.category.findUnique({ where: { slug: 'audio' } })
    const acessorios = await prisma.category.findUnique({ where: { slug: 'acessorios' } })
    const setupsCompletos = await prisma.category.findUnique({ where: { slug: 'setups-completos' } })
    const cadeiras = await prisma.category.findUnique({ where: { slug: 'cadeiras' } })
    const componentes = await prisma.category.findUnique({ where: { slug: 'componentes' } })

    // Adicionar categoryId aos produtos
    const productsWithCategory = [
      { ...products[0], categoryId: teclados!.id },       // K600
      { ...products[1], categoryId: mouses!.id },         // Pro X
      { ...products[2], categoryId: monitores!.id },      // Ultrawide
      { ...products[3], categoryId: audio!.id },          // Stealth Headset
      { ...products[4], categoryId: acessorios!.id },     // Mousepad
      { ...products[5], categoryId: setupsCompletos!.id },// Setup Stealth
      { ...products[6], categoryId: cadeiras!.id },       // Cadeira Ergo
      { ...products[7], categoryId: acessorios!.id },     // Cabo Coiled
      { ...products[8], categoryId: acessorios!.id },     // Suporte Monitor
      { ...products[9], categoryId: componentes!.id },    // RTX 4070
    ]

    // Criar produtos
    const createdProducts = await prisma.product.createMany({ data: productsWithCategory })
    console.log(`✅ ${createdProducts.count} produtos criados com categorias vinculadas`)

    // Buscar produtos criados para obter IDs
    const tecladoK600 = await prisma.product.findUnique({ where: { slug: 'teclado-mecanico-k600' } })
    const mouseProX = await prisma.product.findUnique({ where: { slug: 'mouse-ultralight-pro-x' } })
    const monitorUltrawide = await prisma.product.findUnique({ where: { slug: 'monitor-ultrawide-34' } })
    const cadeiraErgo = await prisma.product.findUnique({ where: { slug: 'cadeira-ergopro' } })

    // Criar pedidos com OrderItems
    const order1 = await prisma.order.create({
      data: {
        userId: user1.id,
        total: 1269.88, // 2x K600 (459.99) + 1x Mouse Pro X (349.90)
        status: 'PAID',
        shippingAddress: {
          cep: '01310100',
          street: 'Av. Paulista',
          number: '1578',
          complement: 'Apto 101',
          neighborhood: 'Bela Vista',
          city: 'São Paulo',
          state: 'SP',
          country: 'BR',
        },
        paymentMethod: 'credit_card',
        items: {
          create: [
            {
              productId: tecladoK600!.id,
              price: 459.99,
              quantity: 2,
              size: 'ANSI',
            },
            {
              productId: mouseProX!.id,
              price: 349.90,
              quantity: 1,
              size: 'Único',
            },
          ],
        },
      },
    })

    const order2 = await prisma.order.create({
      data: {
        userId: user2.id,
        total: 4399.49, // 1x Monitor (2499.50) + 1x Cadeira (1899.99)
        status: 'SHIPPED',
        shippingAddress: {
          cep: '20040020',
          street: 'Av. Rio Branco',
          number: '156',
          neighborhood: 'Centro',
          city: 'Rio de Janeiro',
          state: 'RJ',
          country: 'BR',
        },
        paymentMethod: 'pix',
        items: {
          create: [
            {
              productId: monitorUltrawide!.id,
              price: 2499.50,
              quantity: 1,
              size: '34"',
            },
            {
              productId: cadeiraErgo!.id,
              price: 1899.99,
              quantity: 1,
              size: 'Único',
            },
          ],
        },
      },
    })

    console.log(`✅ 2 pedidos criados (Order IDs: ${order1.id}, ${order2.id})`)
    
    console.log('🎉 Seed TechStation finalizado com sucesso!')
  } catch (error) {
    console.error('❌ Erro no seed:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()