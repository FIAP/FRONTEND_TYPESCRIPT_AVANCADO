function measureTime(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const end = performance.now();
        console.log(`Execução de ${propertyKey} levou ${end - start} milissegundos.`);
        return result;
    };

    return descriptor;
}

class MathOperations {
    @measureTime
    static complexCalculation() {
        // Simula um cálculo complexo com um atraso
        let total = 0;
        for (let i = 0; i < 10000000; i++) {
            total += Math.sqrt(i);
        }
        return total;
    }
}

console.log("Resultado do cálculo:", MathOperations.complexCalculation());
