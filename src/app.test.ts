import { invoiceCpf } from './app';

test("Should validade cpf", function () {
    expect(invoiceCpf).toBe("03816446183");
});

