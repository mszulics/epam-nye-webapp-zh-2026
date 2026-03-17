// DO NOT MODIFY THIS FILE!

import { describe, it, expect } from 'vitest';
import { employees, getHighEarners, applyDevBonus } from './index';

describe('Mid-Semester JS Test', () => {
    describe('getHighEarners', () => {
        it('should return the names earning more than the given limit', () => {
            const result = getHighEarners(employees, 1000000);
            expect(result).toContain('Zoltán');
            expect(result).toContain('Eszter');
            expect(result).toHaveLength(2);
        });

        it('should return an empty array if none earns more than the given limit', () => {
            expect(getHighEarners(employees, 9999999999)).toHaveLength(0);
        });
    })

    describe('applyDevBonus', () => {
        it('should apply a 10% bonus to "Developer" roles', () => {
            const updated = applyDevBonus(employees);
            const aniko = updated.find(e => e.name === "Anikó");
            const gergo = updated.find(e => e.name === "Gergő");

            expect(aniko.salary).toBe(990000); // 900k + 10%
            expect(gergo.salary).toBe(750000); // No change for Designers
        });

        it('should NOT mutate the original array', () => {
            const originalSalary = employees[0].salary;
            applyDevBonus(employees);
            expect(employees[0].salary).toBe(originalSalary);
        });
    });
});
