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
    categorySlug: 'teclados',
    description: 'Teclado mecânico tátil com switches Brown e iluminação RGB customizável.',
    price: '459.99',
    colors: ['Black', 'White'],
    images: ['/images/teclado-mecanico.png'],
    sizes: ['ANSI', 'ABNT2'], // Usando sizes para layout
    stock: 120,
    active: true,
  },
  {
    name: 'Mouse Ultralight Pro X',
    slug: 'mouse-ultralight-pro-x',
    categorySlug: 'mouses',
    description: 'Mouse ultraleve de 60g com sensor óptico de 26K DPI.',
    price: '349.90',
    colors: ['Black', 'White'],
    images: ['/images/mouse-ergonomico.png'],
    sizes: ['Único'],
    stock: 60,
    active: true,
  },
  {
    name: 'Monitor Ultrawide 34" 144Hz',
    slug: 'monitor-ultrawide-34',
    categorySlug: 'monitores',
    description: 'Monitor curvo ultrawide focado em produtividade e imersão.',
    price: '2499.50',
    colors: ['Black'],
    images: ['/images/monitor-ultrawide.png'],
    sizes: ['34"'],
    stock: 40,
    active: true,
  },
  {
    name: 'Headset Wireless Stealth',
    slug: 'headset-wireless-stealth',
    categorySlug: 'audio',
    description: 'Headset sem fio com áudio espacial e bateria de 50 horas.',
    price: '799.00',
    colors: ['Black', 'Gray'],
    images: ['/images/headset-studio.png'],
    sizes: ['Único'],
    stock: 200,
    active: true,
  },
  {
    name: 'Mousepad Control Extended',
    slug: 'mousepad-control-extended',
    categorySlug: 'mouses',
    description: 'Mousepad de tecido premium para máximo controle.',
    price: '119.99',
    colors: ['Black', 'Navy'],
    images: ['/images/deskpad-couro.png'],
    sizes: ['L', 'XL'],
    stock: 80,
    active: true,
  },
  {
    name: 'Suporte Articulado para Monitor',
    slug: 'suporte-monitor',
    categorySlug: 'acessorios',
    description: 'Braço articulado com pistão a gás para 1 monitor.',
    price: '269.00',
    colors: ['Black'],
    images: ['/images/suporte-monitor.png'],
    sizes: ['Único'],
    stock: 45,
    active: true,
  },
  {
    name: 'Setup Tático Stealth',
    slug: 'setup-tatico-stealth',
    categorySlug: 'setups-completos',
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
    categorySlug: 'cadeiras',
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
    categorySlug: 'acessorios',
    description: 'Cabo enrolado customizado para teclados mecânicos.',
    price: '89.50',
    colors: ['Black', 'White'],
    images: ['https://placehold.co/600x400?text=cabo-coiled+1'],
    sizes: ['1.5m'],
    stock: 150,
    active: true,
  },
  {
    name: 'RTX 4070 Ti Super',
    slug: 'rtx-4070-ti-super',
    categorySlug: 'componentes',
    description: 'Placa de vídeo de alta performance para 1440p e 4K.',
    price: '5499.99',
    colors: ['Black', 'Silver'],
    images: ['https://placehold.co/600x400?text=rtx-4070+1'],
    sizes: ['16GB VRAM'],
    stock: 20,
    active: true,
  },
  {
    name: 'Teclado Gamer RGB TKL',
    slug: 'teclado-gamer-rgb-tkl',
    categorySlug: 'teclados',
    description: 'Teclado TKL com iluminação RGB por tecla e anti-ghosting completo.',
    price: '399.90',
    colors: ['Black'],
    images: ['https://placehold.co/600x400?text=teclado-gamer-rgb-tkl'],
    sizes: ['ABNT2'],
    stock: 90,
    active: true,
  },
  {
    name: 'Teclado Mecânico Phantom 60',
    slug: 'teclado-mecanico-phantom-60',
    categorySlug: 'teclados',
    description: 'Formato 60% com switches lineares e espuma interna para digitação macia.',
    price: '529.00',
    colors: ['White', 'Black'],
    images: ['https://placehold.co/600x400?text=teclado-mecanico-phantom-60'],
    sizes: ['ANSI'],
    stock: 70,
    active: true,
  },
  {
    name: 'Teclado Silent Office Pro',
    slug: 'teclado-silent-office-pro',
    categorySlug: 'teclados',
    description: 'Teclado silencioso com perfil baixo e foco em produtividade diária.',
    price: '279.90',
    colors: ['Graphite'],
    images: ['https://placehold.co/600x400?text=teclado-silent-office-pro'],
    sizes: ['ABNT2'],
    stock: 110,
    active: true,
  },
  {
    name: 'Teclado Wireless Air75',
    slug: 'teclado-wireless-air75',
    categorySlug: 'teclados',
    description: 'Teclado sem fio compacto com conexão tripla e bateria de longa duração.',
    price: '649.90',
    colors: ['Silver', 'Black'],
    images: ['https://placehold.co/600x400?text=teclado-wireless-air75'],
    sizes: ['ANSI'],
    stock: 55,
    active: true,
  },
  {
    name: 'Mouse Precision G5',
    slug: 'mouse-precision-g5',
    categorySlug: 'mouses',
    description: 'Sensor de alta precisão para eSports com switches ópticos duráveis.',
    price: '289.90',
    colors: ['Black'],
    images: ['https://placehold.co/600x400?text=mouse-precision-g5'],
    sizes: ['Único'],
    stock: 95,
    active: true,
  },
  {
    name: 'Mouse ErgoFit Vertical',
    slug: 'mouse-ergofit-vertical',
    categorySlug: 'mouses',
    description: 'Mouse vertical ergonômico para reduzir tensão em longas horas de trabalho.',
    price: '219.90',
    colors: ['Black', 'White'],
    images: ['https://placehold.co/600x400?text=mouse-ergofit-vertical'],
    sizes: ['Único'],
    stock: 85,
    active: true,
  },
  {
    name: 'Mouse Gamer Vortex',
    slug: 'mouse-gamer-vortex',
    categorySlug: 'mouses',
    description: 'Mouse gamer com 8 botões programáveis e iluminação dinâmica.',
    price: '329.00',
    colors: ['Black'],
    images: ['https://placehold.co/600x400?text=mouse-gamer-vortex'],
    sizes: ['Único'],
    stock: 78,
    active: true,
  },
  {
    name: 'Mouse Wireless Travel M2',
    slug: 'mouse-wireless-travel-m2',
    categorySlug: 'mouses',
    description: 'Modelo portátil com bluetooth e receptor 2.4GHz para mobilidade total.',
    price: '179.90',
    colors: ['Gray'],
    images: ['https://placehold.co/600x400?text=mouse-wireless-travel-m2'],
    sizes: ['Único'],
    stock: 130,
    active: true,
  },
  {
    name: 'Monitor IPS 27 QHD',
    slug: 'monitor-ips-27-qhd',
    categorySlug: 'monitores',
    description: 'Monitor 27 polegadas QHD com painel IPS e excelente fidelidade de cores.',
    price: '1799.00',
    colors: ['Black'],
    images: ['https://placehold.co/600x400?text=monitor-ips-27-qhd'],
    sizes: ['27"'],
    stock: 52,
    active: true,
  },
  {
    name: 'Monitor Gamer 24 165Hz',
    slug: 'monitor-gamer-24-165hz',
    categorySlug: 'monitores',
    description: 'Painel de 165Hz com tempo de resposta baixo para gameplay competitivo.',
    price: '1399.90',
    colors: ['Black'],
    images: ['https://placehold.co/600x400?text=monitor-gamer-24-165hz'],
    sizes: ['24"'],
    stock: 66,
    active: true,
  },
  {
    name: 'Monitor 4K 32 Pro',
    slug: 'monitor-4k-32-pro',
    categorySlug: 'monitores',
    description: 'Monitor 4K de 32 polegadas para edição, design e produtividade avançada.',
    price: '3299.90',
    colors: ['Black', 'Silver'],
    images: ['https://placehold.co/600x400?text=monitor-4k-32-pro'],
    sizes: ['32"'],
    stock: 28,
    active: true,
  },
  {
    name: 'Monitor Ultrawide 29 Office',
    slug: 'monitor-ultrawide-29-office',
    categorySlug: 'monitores',
    description: 'Modelo ultrawide para multitarefa com ótimo custo-benefício.',
    price: '1699.00',
    colors: ['Black'],
    images: ['https://placehold.co/600x400?text=monitor-ultrawide-29-office'],
    sizes: ['29"'],
    stock: 47,
    active: true,
  },
  {
    name: 'Headset Pro 7.1',
    slug: 'headset-pro-7-1',
    categorySlug: 'audio',
    description: 'Headset com som surround virtual 7.1 e microfone removível.',
    price: '499.90',
    colors: ['Black'],
    images: ['https://placehold.co/600x400?text=headset-pro-7-1'],
    sizes: ['Único'],
    stock: 88,
    active: true,
  },
  {
    name: 'Caixa de Som Pulse',
    slug: 'caixa-de-som-pulse',
    categorySlug: 'audio',
    description: 'Caixa de som estéreo compacta com bluetooth e boa resposta de graves.',
    price: '359.90',
    colors: ['Black', 'White'],
    images: ['https://placehold.co/600x400?text=caixa-de-som-pulse'],
    sizes: ['Único'],
    stock: 64,
    active: true,
  },
  {
    name: 'Soundbar Compacta S1',
    slug: 'soundbar-compacta-s1',
    categorySlug: 'audio',
    description: 'Soundbar minimalista para desktop com conexão USB e bluetooth.',
    price: '429.90',
    colors: ['Black'],
    images: ['https://placehold.co/600x400?text=soundbar-compacta-s1'],
    sizes: ['Único'],
    stock: 58,
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

    // Mapear categorias por slug para vincular os produtos de forma segura
    const categoriesFromDb = await prisma.category.findMany({
      select: {
        id: true,
        slug: true,
      },
    })

    const categoryIdBySlug = new Map(categoriesFromDb.map((category) => [category.slug, category.id]))

    // Adicionar categoryId aos produtos com base no categorySlug do próprio produto
    const productsWithCategory = products.map(({ categorySlug, ...product }) => {
      const categoryId = categoryIdBySlug.get(categorySlug)

      if (!categoryId) {
        throw new Error(`Categoria com slug "${categorySlug}" não encontrada`)
      }

      return {
        ...product,
        categoryId,
      }
    })

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