import { invoiceCpf, totalOrderedItens, discountToken  } from './app';

test("Should validade cpf", function () {
    expect(invoiceCpf).toBe("03816446183");
});

test("Should totalOrderedItens be more than 3", function () {
    expect(totalOrderedItens).toBeGreaterThanOrEqual(3);
});

test("Should discountToke be true", function () {
    expect(discountToken).toBeTruthy;
});

